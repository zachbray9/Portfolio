package models

type OpenAiEmbeddingRequest struct {
	Model string `json:"model"`
	Input string `json:"input"`
}
