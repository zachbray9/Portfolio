package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/zachbray9/portfolio/api/models/openAIModels"
	"github.com/zachbray9/portfolio/api/models/requests"
	"github.com/zachbray9/portfolio/api/models/responses"
	"github.com/zachbray9/portfolio/api/utils/openAIUtils"
)

func CallAssistantsApi(context *gin.Context) {
	var chatRequest requests.ChatRequest
	err := context.ShouldBindJSON(&chatRequest)

	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": "invalid_field(s)"})
		return
	}

	var client *http.Client = &http.Client{}
	var threadId string

	if(chatRequest.ThreadId == nil) {
		threadId, err = openAIUtils.CreateThread(client)

		if err != nil {
			context.JSON(http.StatusInternalServerError, gin.H{"error": "failed to create thread"})
			return
		}
	} else {
		threadId = *chatRequest.ThreadId
	}

	err = openAIUtils.AddMessageToThread(chatRequest.Message, threadId, client)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": "failed to add message to thread"})
		return
	}

	runId, err := openAIUtils.RunAssistant(threadId, client)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": "there was an issue running the assistant"})
		return
	}

	var status string = ""
	for status != "completed" {
		status, err = openAIUtils.CheckRunCompletion(threadId, runId, client)

		if err != nil {
			context.JSON(http.StatusInternalServerError, gin.H{"error": "there was an issue checking the assistant run completion"})
			return
		}
	}

	var assistantMessage openAIModels.Message
	assistantMessage, err = openAIUtils.GetAssistantResponse(threadId, client)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": "there was an issue getting the assistant's response"})
		return
	}

	var response responses.ChatbotResponse = responses.ChatbotResponse{
		Role: assistantMessage.Role,
		Message: assistantMessage.Content[0].Text.Value,
	}

	context.JSON(http.StatusOK, response)
}
