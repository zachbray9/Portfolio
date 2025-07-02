package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/zachbray9/portfolio/api/models/openAIModels"
	"github.com/zachbray9/portfolio/api/models/requests"
	"github.com/zachbray9/portfolio/api/models/responses"
	"github.com/zachbray9/portfolio/api/utils/commonUtils"
	"github.com/zachbray9/portfolio/api/utils/openAIUtils"
	"github.com/zachbray9/portfolio/api/utils/supabaseUtils"
)

func CallAssistantsApi(context *gin.Context) {
	var chatRequest requests.ChatRequest
	err := context.ShouldBindJSON(&chatRequest)

	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": "invalid_field(s)"})
		return
	}

	var client *http.Client = &http.Client{}

	//connect to vector database in supabase
	db, err := supabaseUtils.ConnectToSupabaseDb()
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": "failed to connect to database"})
		return
	}

	//generate an embedding for the message sent in the request
	embedding, err := openAIUtils.CreateEmbedding(chatRequest.Message, client)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": "failed to create embedding for user message"})
		return
	}

	relevantInfo, err := supabaseUtils.FindRelevantInfo(embedding, db)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": "failed to query the database"})
		return
	}

	//creates a prompt for llm based on retrieved info
	prompt := commonUtils.CreatePrompt(chatRequest.Message, relevantInfo)
	
	//checks if the request contains a thread id, and if it doesn't then create a new thread
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

	//add users message to thread
	err = openAIUtils.AddMessageToThread(prompt, threadId, client)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": "failed to add message to thread"})
		return
	}

	//run the openai assistant
	runId, err := openAIUtils.RunAssistant(threadId, client)

	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": "there was an issue running the assistant"})
		return
	}

	//keep checking if the run has completed and escape only when it does
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
		ThreadId: threadId,
		Role: assistantMessage.Role,
		Message: assistantMessage.Content[0].Text.Value,
	}

	context.JSON(http.StatusOK, response)
}
