package responses

type ChatbotResponse struct {
	Role string `json:"role"`
	Message string `json:"message"`
}