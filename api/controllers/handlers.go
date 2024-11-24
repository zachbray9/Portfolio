package controllers

import "github.com/gin-gonic/gin"

func RegisterEndpoints(server *gin.Engine) {
	server.POST("/api/chat", CallAssistantsApi)
}