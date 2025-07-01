package main

import (
	"bufio"
	"bytes"
	"context"
	"embeddings-cli/models"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

const (
	chunksDirectory = "./chunks"
	embeddingModel  = "text-embedding-3-small"
	embeddingUrl    = "https://api.openai.com/v1/embeddings"
	supabaseTable   = "documents"
)

func main() {
	files, err := filepath.Glob(filepath.Join(chunksDirectory, "*.txt"))

	if err != nil {
		log.Fatalf("Error reading chunks directory: %v", err)
	}

	if len(files) == 0 {
		log.Fatalf("No .txt files found in %v", chunksDirectory)
	}

	for _, file := range files {
		fmt.Printf("Processing file: %s", file)

		content, err := readFile(file)
		if err != nil {
			log.Printf("Failed to read %s: %v", file, err)
			continue
		}

		embedding, err := createEmbedding(content)
		if err != nil {
			log.Printf("Failed to create embedding for %s: %v", file, err)
		}

		err = insertDocument(content, embedding)
		if err != nil {
			log.Printf("Failed to insert document for %s: %v", file, err)
		}

		fmt.Printf("Successfully processed %s\n", file)
	}
}

func readFile(path string) (string, error) {
	f, err := os.Open(path)

	if err != nil {
		return "", err
	}

	defer f.Close()

	var sb strings.Builder
	scanner := bufio.NewScanner(f)

	for scanner.Scan() {
		sb.WriteString(scanner.Text())
		sb.WriteString("\n")
	}

	return sb.String(), scanner.Err()
}

func createEmbedding(text string) ([]float32, error) {
	reqBody := models.OpenAiEmbeddingRequest{
		Model: embeddingModel,
		Input: text,
	}

	bodyBytes, _ := json.Marshal(reqBody)

	req, err := http.NewRequest("POST", embeddingUrl, bytes.NewBuffer(bodyBytes))
	if err != nil {
		return nil, err
	}

	req.Header.Set("Authorization", "Bearer " + os.Getenv("OPENAI_API_KEY"))
	req.Header.Set("Content-Type", "application/json")

	client := http.Client{}
	res, err := client.Do(req)
	if err != nil {
		return nil, err
	}

	defer res.Body.Close()

	if res.StatusCode != 200 {
		resBody, _ := io.ReadAll(res.Body)
		return nil, fmt.Errorf("OpenAI error: %s", string(resBody))
	}

	var openAiResponse models.OpenAiEmbeddingResponse
	err = json.NewDecoder(res.Body).Decode(&openAiResponse)
	if err != nil {
		return nil, err
	}

	if len(openAiResponse.Data) == 0 {
		return nil, fmt.Errorf("no embedding returned")
	}

	return openAiResponse.Data[0].Embedding, nil
}

func insertDocument(content string, embedding []float32) error {
	url := fmt.Sprintf("%s/rest/v1/%s", os.Getenv("SUPABASE_URL"), supabaseTable)
	doc := models.Document {
		Content: content,
		Embedding: embedding,
	}

	bodyBytes, _ := json.Marshal(doc)

	req, err := http.NewRequestWithContext(context.Background(), "POST", url, bytes.NewBuffer(bodyBytes))
	if err != nil {
		return err
	}

	req.Header.Set("Authorization", os.Getenv("SUPABASE_API_KEY"))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Prefer", "return=representation")

	client := http.Client{}

	res, err := client.Do(req)
	if err != nil {
		return err
	}

	defer res.Body.Close()

	if res.StatusCode != 200 && res.StatusCode != 201 {
		resBody, _ := io.ReadAll(res.Body)
		return fmt.Errorf("Supabase insert error: %s", string(resBody))
	}

	return nil
}
