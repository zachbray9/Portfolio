package openAIUtils

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/zachbray9/portfolio/api/models/openAIModels"
	"github.com/zachbray9/portfolio/api/models/responses"
)

func GetAssistantResponse(threadId string, client *http.Client) (openAIModels.Message, error) {
	url := "https://api.openai.com/v1/threads/" + threadId + "/messages"
	apiKey := os.Getenv("OPENAI_API_KEY")

	req, err := http.NewRequest("GET", url, nil)

	if err != nil {
		return openAIModels.Message{}, fmt.Errorf("failed to create request: %w", err)
	}

	req.Header.Add("Authorization", "Bearer "+apiKey)
	req.Header.Add("OpenAI-Beta", "assistants=v2")

	res, err := client.Do(req)

	if err != nil {
		return openAIModels.Message{}, fmt.Errorf("request failed: %w", err)
	}

	defer res.Body.Close()

	var messages responses.GetAssistantMessageResponse

	err = json.NewDecoder(res.Body).Decode(&messages)

	if err != nil {
		return openAIModels.Message{}, fmt.Errorf("failed to deserialize the response body: %w", err)
	}

	return messages.Data[0], nil
}