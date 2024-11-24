package models

type OpenAiApiRequest struct {
	Model       string           `json:"model"`
	Messages    []MessageContent `json:"messages"`
	MaxTokens   int              `json:"max_tokens,omitempty"`
	Temperature float64          `json:"temperature,omitempty"`
	TopP        float64          `json:"top_p,omitempty"`
}
