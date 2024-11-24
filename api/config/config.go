package config

import (
	"os"

	"github.com/joho/godotenv"
)

func InitEnvironmentVariables() {
	if os.Getenv("MODE") != "production" {
		err := godotenv.Load()

		if err != nil {
			panic(err)
		}
	}
}