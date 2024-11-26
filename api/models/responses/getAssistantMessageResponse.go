package responses

import "github.com/zachbray9/portfolio/api/models/openAIModels"

type GetAssistantMessageResponse struct {
	Data []openAIModels.Message `json:"data"`
}