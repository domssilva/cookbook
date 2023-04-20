package main

import (
	"log"
	"net/http"
	"encoding/json"
	"database/sql"
	_ "github.com/go-sql-driver/mysql" // initialize the driver and don't need to use its name in our code
)


func main() {
	// Read the database credentials from environment variables
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	dbname := os.Getenv("DB_NAME")

	// Open a connection to the database
	db, err := sql.Open("mysql", fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", user, password, host, port, dbname))
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// Retrieve records from the database
	records, err := GetRecords(db)
	if err != nil {
		log.Fatal(err)
	}

	// Print the records to the console
	for _, record := range records {
		log.Printf("%s: %s - %s\n", record.ID, record.Artist, record.Title)
	}

	// start http server
	mux := http.NewServeMux()
	mux.HandleFunc("/records", func(w http.ResponseWriter, r *http.Request) {
		// Retrieve records from the database
		records, err := GetRecords(db)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	
		// Encode the records as JSON and write them to the response
		w.Header().Set("Content-Type", "application/json")
		if err := json.NewEncoder(w).Encode(records); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	})
	http.ListenAndServe(":8080", mux)
}