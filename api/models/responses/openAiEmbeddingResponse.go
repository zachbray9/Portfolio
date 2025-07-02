package responses

import "github.com/zachbray9/portfolio/api/models/openAIModels"

type OpenAiEmbeddingResponse struct {
	Data []openAIModels.Embedding `json:"data"`
}