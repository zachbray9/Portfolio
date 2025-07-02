package openAIUtils

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/zachbray9/portfolio/api/models/requests"
	"github.com/zachbray9/portfolio/api/models/responses"
)

const (
	embeddingUrl   = "https://api.openai.com/v1/embeddings"
	embeddingModel = "text-embedding-3-small"
)

func CreateEmbedding(text string, client *http.Client) ([]float32, error) {
	reqBody := requests.OpenAiEmbeddingRequest{
		Model: embeddingModel,
		Input: text,
	}

	bodyBytes, _ := json.Marshal(reqBody)

	req, err := http.NewRequest("POST", embeddingUrl, bytes.NewBuffer(bodyBytes))
	if err != nil {
		return nil, err
	}

	req.Header.Set("Authorization", "Bearer "+os.Getenv("OPENAI_API_KEY"))
	req.Header.Set("Content-Type", "application/json")

	res, err := client.Do(req)
	if err != nil {
		return nil, err
	}

	defer res.Body.Close()

	if res.StatusCode != 200 {
		resBody, _ := io.ReadAll(res.Body)
		return nil, fmt.Errorf("OpenAI error: %s", string(resBody))
	}

	var openAiResponse responses.OpenAiEmbeddingResponse
	err = json.NewDecoder(res.Body).Decode(&openAiResponse)
	if err != nil {
		return nil, err
	}

	if len(openAiResponse.Data) == 0 {
		return nil, fmt.Errorf("no embedding returned")
	}

	return openAiResponse.Data[0].Embedding, nil
}
