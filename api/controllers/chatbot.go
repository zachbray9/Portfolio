package controllers

import (
	"bytes"
	"encoding/json"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/zachbray9/portfolio/api/models"
	"github.com/zachbray9/portfolio/api/utils"
)

func CallAssistantsApi(context *gin.Context) {
	var chatRequest models.ChatRequest
	err := context.ShouldBindJSON(&chatRequest)

	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": "invalid_field(s)"})
		return
	}

	url := "https://api.openai.com/v1/chat/completions"
	apiKey := os.Getenv("OPENAI_API_KEY")
	prompt := utils.LoadChatbotPrompt()

	//serialize the request that will be sent to the openai api
	requestBody, err := json.Marshal(models.OpenAiApiRequest{
		Model: "gpt-3.5-turbo",
		Messages: []models.MessageContent{
			{Role: "system", Content: prompt},
			{Role: "user", Content: chatRequest.Message},
		},
		Temperature: 1.50,
		TopP:        1.00,
	})

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": "internal_server_error"})
		return
	}

	//create request
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(requestBody))

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": "request_creation_error"})
		return
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+apiKey)

	//send request
	client := &http.Client{}
	res, err := client.Do(req)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": "internal_server_error"})
		return
	}

	defer res.Body.Close()

	var response models.OpenAiApiResponse
	err = json.NewDecoder(res.Body).Decode(&response)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": "response_decoding_error"})
		return
	}

	//if the openai api doesn't return anything then give a 500 status
	if len(response.Choices) == 0 {
		context.JSON(http.StatusInternalServerError, gin.H{"error": "no_response_from_ai"})
		return
	}

	chatBotMessage := models.ChatbotResponse{
		Role: "assistant",
		Message: response.Choices[0].Message.Content,
	}
	
	context.JSON(http.StatusOK, chatBotMessage)
}
