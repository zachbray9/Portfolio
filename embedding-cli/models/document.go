package models

type Document struct {
	Content string `json:"content"`
	Embedding []float32 `json:"embedding"`
}