package openAIUtils

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/zachbray9/portfolio/api/models/openAIModels"
	"github.com/zachbray9/portfolio/api/models/requests"
)

func RunAssistant(threadId string, client *http.Client) (string, error) {
	url := "https://api.openai.com/v1/threads/" + threadId + "/runs"
	apiKey := os.Getenv("OPENAI_API_KEY")
	assistantId := os.Getenv("OPENAI_ASSISTANT_ID")

	var runAssistantRequest requests.RunAssistantRequest = requests.RunAssistantRequest{
		AssistantId: assistantId,
	}

	body, err := json.Marshal(runAssistantRequest)

	if err != nil {
		return "", fmt.Errorf("failed to serialize request body: %w", err)
	}

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(body))

	if err != nil {
		return "", fmt.Errorf("failed to create request: %w", err)
	}

	req.Header.Add("Authorization", "Bearer " + apiKey)
	req.Header.Add("OpenAI-Beta", "assistants=v2")

	res, err := client.Do(req)

	if err != nil {
		return "", fmt.Errorf("request failed: %w", err)
	}

	var run openAIModels.Run
	err = json.NewDecoder(res.Body).Decode(&run)

	if err != nil {
		return "", fmt.Errorf("failed to deserialize the response body: %w", err)
	}

	return run.Id, nil
}