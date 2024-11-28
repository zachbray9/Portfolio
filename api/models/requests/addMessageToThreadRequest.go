package requests

type AddMessageToThreadRequest struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}
