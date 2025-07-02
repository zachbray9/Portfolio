package supabaseUtils

import (
	"database/sql"
	"fmt"

	"github.com/pgvector/pgvector-go"
)

const (
	topK = 5
)

func FindRelevantInfo(embedding []float32, db *sql.DB) ([]string, error) {
	if db == nil {
		return nil, fmt.Errorf("database was not initialized")
	}

	query := `
		SELECT content
		FROM documents
		ORDER BY embedding <=> $1::vector
		LIMIT $2
	`

	vector := pgvector.NewVector(embedding)

	rows, err := db.Query(query, vector, topK)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var results []string
	for rows.Next() {
		var content string

		err := rows.Scan(&content)
		if err != nil {
			return nil, err
		}

		results = append(results, content)
	}

	return results, nil
}
