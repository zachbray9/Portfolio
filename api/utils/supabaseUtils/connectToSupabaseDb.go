package supabaseUtils

import (
	"database/sql"
	"os"
	_ "github.com/lib/pq"
)

func ConnectToSupabaseDb() (*sql.DB, error) {
	connectionString := os.Getenv("SUPABASE_CONNECTION_STRING")
	db, err := sql.Open("postgres", connectionString)
	if err != nil {
		return nil, err
	}

	err = db.Ping()
	if err != nil {
		return nil, err
	}

	return db, nil
}