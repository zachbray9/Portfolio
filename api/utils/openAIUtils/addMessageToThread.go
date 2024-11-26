package openAIUtils

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/zachbray9/portfolio/api/models/requests"
)

func AddMessageToThread(content string, threadId string, client *http.Client) error {
	apiKey := os.Getenv("OPENAI_API_KEY")
	url := "https://api.openai.com/v1/threads/" + threadId + "/messages"
	var message requests.AddMessageToThreadRequest = requests.AddMessageToThreadRequest{
		Role: "user",
		Content: content,
	}

	body, err := json.Marshal(message)

	if err != nil {
		return fmt.Errorf("failed to serialize request body: %w", err)
	}

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(body))

	if err != nil {
		return fmt.Errorf("failed to create request: %w", err)
	}

	req.Header.Add("Authorization", "Bearer " + apiKey)
	req.Header.Add("OpenAI-Beta", "assistants=v2")

	res, err := client.Do(req)

	if err != nil {
		return fmt.Errorf("request failed: %w", err)
	}

	res.Body.Close()

	return nil
}