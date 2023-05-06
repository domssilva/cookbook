package main

import (
	"database/sql"
	"log"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	Id       int
	Username string
	Password string
}

func HashPassword(password string) ([]byte, error) {
	// Hash the password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		log.Println("Could not hash password")
		return nil, err
	}
	return hashedPassword, nil
}

func VerifyCredentials(username string, password string) (bool, error) {
	// get db connection
	db, err := GetDbConnection()
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// query the database to get the hashed password for the user
	var dbPassword string
	err = db.QueryRow("SELECT password FROM users WHERE username=?", username).Scan(&dbPassword)
	if err != nil {
		if err == sql.ErrNoRows {
			log.Println("User not found.")
			return false, nil
		}
		log.Println(err)
		return false, err
	}

	// compare the hashed password from the database with the password entered by the user
	err = bcrypt.CompareHashAndPassword([]byte(dbPassword), []byte(password))
	if err != nil {
		if err == bcrypt.ErrMismatchedHashAndPassword {
			log.Println("Invalid password")
			return false, nil
		}
		log.Println(err)
		return false, err
	}

	// password match
	return true, nil
}