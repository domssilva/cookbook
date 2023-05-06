package main

import (
	"log"
	"net/http"
	"golang.org/x/crypto/bcrypt"
)

func main() {
	http.HandleFunc("/signup", logRequest(handleSignup))
	http.HandleFunc("/", logRequest(handleHome))
	http.ListenAndServe(":8080", nil)
}

// Handles / route
func handleHome(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodGet {
		http.ServeFile(w, r, "index.html")
	} else {
		http.Error(w, "Method not allowed.", http.StatusMethodNotAllowed)
	}
}

// Handles / signup
func handleSignup(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodGet {
		http.ServeFile(w, r, "sign.html")
	} else if r.Method == http.MethodPost {
		// Parse the username and password from the request body
		err := r.ParseForm()
		if err != nil {
			http.Error(w, "Invalid form data", http.StatusBadRequest)
			return
		}

		username := r.PostForm.Get("username")
		password := r.PostForm.Get("password")

		// fetch db
		db, err := GetDbConnection()
		if err != nil {
			log.Println(err)
			http.Error(w, "Error fetching db on signup.", http.StatusInternalServerError)
		}
		// ensure that the db connection is properly closed
		defer db.Close()

		// Hash the password
		hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
		if err != nil {
			http.Error(w, "Could not hash password", http.StatusInternalServerError)
			return
		}

		// insert credentials using Parameterized Strings to avoid SQLi
		_, err = db.Exec("INSERT INTO users (username, password) VALUES (?, ?)", username, hashedPassword)
		if err != nil {
			log.Println(err)
			http.Error(w, "Could not create user", http.StatusInternalServerError)
			return
		}

		// Return a success response
		w.WriteHeader(http.StatusCreated)
		w.Write([]byte("New account created."))
	} else {
		http.Error(w, "Method not allowed.", http.StatusMethodNotAllowed)
	}
}

// Middleware that logs "{req method} {req path}"
func logRequest(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		log.Println(r.Method, r.URL.Path)
		next(w, r)
	}
}
