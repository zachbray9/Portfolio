package utils

import "regexp"

func RemoveCitations(text string) string {
	citationPattern := regexp.MustCompile(`【\d+:\d+†source】`)

	// Replace all occurrences of the pattern with an empty string
	cleanedResponse := citationPattern.ReplaceAllString(text, "")
	return cleanedResponse
}