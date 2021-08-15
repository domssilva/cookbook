package main

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
)

func main() {
	psqlInfo := "host=localhost user=postgres password=manager dbname=jobanalysis sslmode=disable"
	db, err := sql.Open("postgres", psqlInfo)
	fmt.Println(psqlInfo)

	if err != nil {
		panic(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		panic(err)
	}

	_, err = db.Exec("select * from jobs")
	if err != nil {
		panic(err)
	}

	
}