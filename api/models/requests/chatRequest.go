package requests

type ChatRequest struct {
	ThreadId *string `json:"threadId"`
	Message  string `json:"message"`
}
