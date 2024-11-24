package main

import (
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/zachbray9/portfolio/api/config"
	"github.com/zachbray9/portfolio/api/controllers"
)

func main() {
	if os.Getenv("MODE") == "production" {
		gin.SetMode(gin.ReleaseMode)
	}

	config.InitEnvironmentVariables()

	server := gin.Default()

	//cors policy
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5173"}
	config.AllowHeaders = []string{"Authorization", "Content-Type"}
	server.Use(cors.New(config))

	//Set up api endpoints
	controllers.RegisterEndpoints(server)

	port := os.Getenv("PORT")
	server.Run("0.0.0.0:" + port)
}
