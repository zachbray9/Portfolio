package responses

type ChatbotResponse struct {
	ThreadId string `json:"threadId"`
	Role string `json:"role"`
	Message string `json:"message"`
}