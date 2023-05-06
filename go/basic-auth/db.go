package main

import (
	"database/sql"
	"fmt"
	"os"
	_ "github.com/go-sql-driver/mysql"
)

func GetDbConnection() (*sql.DB, error) {
	// set database credentials
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	dbname := os.Getenv("BASICAUTH_DB_USERNAME")

	// create data source name
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", user, password, host, port, dbname)

	// open connection to database
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		return nil, err
	}

	// check if connection is successful
	err = db.Ping()
	if err != nil {
		return nil, err
	}

	return db, nil
}
