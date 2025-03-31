package controllers

import (
	"os"

	"github.com/gin-gonic/gin"
)

func RegisterEndpoints(server *gin.Engine) {
	server.POST("/api/chat", CallAssistantsApi)

	if os.Getenv("MODE") == "production" {

		server.Static("/assets", "./wwwroot/assets")
		server.Static("/gravityOfSilence", "./wwwroot/gravityOfSilence")
		server.Static("/projectCybernetica", "./wwwroot/projectCybernetica")

		server.StaticFile("/android-chrome-192x192.png", "./wwwroot/android-chrome-192x192.png")
		server.StaticFile("/apple-touch-icon.png", "./wwwroot/apple-touch-icon.png")	
		server.StaticFile("/favicon-16x16.png", "./wwwroot/favicon-16x16.png")
		server.StaticFile("/favicon-32x32.png", "./wwwroot/favicon-32x32.png")
		server.StaticFile("/favicon.ico", "./wwwroot/favicon.ico")
		server.StaticFile("/site.webmanifest", "./wwwroot/site.webmanifest")
		server.StaticFile("/ChakraUiLogo.png", "./wwwroot/ChakraUiLogo.png")
		server.StaticFile("/ZacharyBray-Resume-2025.pdf", "./wwwroot/ZacharyBray-Resume-2025.pdf")
		server.StaticFile("/Zuko_Pic.jpg", "./wwwroot/Zuko_Pic.jpg")

		server.NoRoute(func (c *gin.Context){
			c.File("./wwwroot/index.html")
		})

	}
}