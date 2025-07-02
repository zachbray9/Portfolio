package commonUtils

import (
	"fmt"
	"strings"
)

func CreatePrompt(message string, contextChunks []string) string {
	context := strings.Join(contextChunks, "\n\n")

	prompt := fmt.Sprintf("Use the following information to answer the question:\n\n%s\n\nQuestion: %s", context, message)

	return prompt
}