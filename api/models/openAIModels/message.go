package openAIModels

type Message struct {
	Role    string `json:"role"`
	Content []messageContent `json:"content"`
}

type messageContent struct {
	Text messageContentValue `json:"text"`
}

type messageContentValue struct {
	Value string `json:"value"`
}
