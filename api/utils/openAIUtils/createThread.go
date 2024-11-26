package openAIUtils

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/zachbray9/portfolio/api/models/openAIModels"
)

func CreateThread(client *http.Client) (string, error) {
	apiKey := os.Getenv("OPENAI_API_KEY")
	url := "https://api.openai.com/v1/threads"

	req, err := http.NewRequest("POST", url, nil)

	if err != nil {
		return "", fmt.Errorf("failed to create the request: %w", err)
	}

	req.Header.Add("Authorization", "Bearer " + apiKey)
	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("OpenAI-Beta", "assistants=v2")

	res, err := client.Do(req)

	if err != nil {
		return "", fmt.Errorf("request failed: %w", err)
	}

	resBody, err := io.ReadAll(res.Body)

	if err != nil {
		return "", fmt.Errorf("failed to read the response body: %w", err)
	}

	if res.StatusCode != 200 {
		return "", fmt.Errorf("openai api returned a %d status: %s", res.StatusCode, resBody)
	}

	defer res.Body.Close()

	var thread openAIModels.Thread
	err = json.Unmarshal(resBody, &thread)

	if err != nil {
		return "", fmt.Errorf("failed to decode response body: %w", err)
	}

	return thread.Id, nil
}
