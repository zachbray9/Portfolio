package openAIUtils

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/zachbray9/portfolio/api/models/openAIModels"
)

func CheckRunCompletion(threadId string, runId string, client *http.Client) (string, error) {
	url := "https://api.openai.com/v1/threads/" + threadId + "/runs/" + runId
	apiKey := os.Getenv("OPENAI_API_KEY")

	req, err := http.NewRequest("GET", url, nil)

	if err != nil {
		return "", fmt.Errorf("failed to create request: %w", err)
	}

	req.Header.Add("Authorization", "Bearer " + apiKey)
	req.Header.Add("OpenAI-Beta", "assistants=v2")

	res, err := client.Do(req)

	if err != nil {
		return "", fmt.Errorf("request failed: %w", err)
	}

	defer res.Body.Close()

	var run openAIModels.Run
	err = json.NewDecoder(res.Body).Decode(&run)

	if err != nil {
		return "", fmt.Errorf("failed to deserialize response body: %w", err)
	}

	return run.Status, nil
}