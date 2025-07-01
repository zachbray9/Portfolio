package models

type OpenAiEmbeddingResponse struct {
	Data []Embedding `json:"data"`
}
