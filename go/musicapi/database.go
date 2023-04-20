package main

import (
	"database/sql"
)

type Record struct {
	ID string `json:"id"`
	Artist string `json:"artist"`
	Title string `json:"title"`
}

func GetRecords(db *sql.DB) ([]Record, error) {
	rows, err := db.Query("SELECT * FROM records")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	// iterate over rows
	var records []Record
	for rows.Next() {
		var record Record
		if err := rows.Scan(&record.ID, &record.Artist, &record.Title); err != nil {
			return nil, err
		}
		records = append(records, record)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}

	return records, nil
}