package models

type Choice struct {
	Index   int            `json:"index"`
	Message MessageContent `json:"message"`
}
