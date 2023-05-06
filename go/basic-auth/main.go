package main

import (
	"html/template"
	"log"
	"net/http"
	"time"
	"golang.org/x/crypto/bcrypt"
)

func main() {
	http.HandleFunc("/profile", logRequest(handleProfile))
	http.HandleFunc("/login", logRequest(handleLogin))
	http.HandleFunc("/signup", logRequest(handleSignup))
	http.HandleFunc("/", logRequest(handleHome))
	http.ListenAndServe(":8080", nil)
}

// Handles /profile
func handleProfile(w http.ResponseWriter, r *http.Request) {
	// Get the username from the cookie
	cookie, err := r.Cookie("session_token")
	if err != nil {
		http.Redirect(w, r, "/login", http.StatusSeeOther)
		return
	}

	// Render the welcome template with the username
	tmpl, err := template.ParseFiles("profile.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	data := struct {
		Username string
	}{
		Username: cookie.Value,
	}
	err = tmpl.Execute(w, data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

// Handles /login
func handleLogin(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodGet {
		http.ServeFile(w, r, "login.html")
	} else if r.Method == http.MethodPost {
		// Parse the username and password from the request body
		err := r.ParseForm()
		if err != nil {
			http.Error(w, "Invalid form data", http.StatusBadRequest)
			return
		}

		username := r.PostForm.Get("username")
		password := r.PostForm.Get("password")
		credentialsValid, err := VerifyCredentials(username, password)
		if err != nil {
			http.Error(w, "Could not validate credentials.", http.StatusInternalServerError)
			return
		}
		if credentialsValid {
			cookie := &http.Cookie{
				Name:     "session_token",
				Value:    username,
				HttpOnly: true,
				SameSite: http.SameSiteStrictMode,
				Expires:  time.Now().Add(30 * time.Minute),
			}
			http.SetCookie(w, cookie)
			http.Redirect(w, r, "/profile", http.StatusSeeOther)
			return
		} else {
			http.Error(w, "Invalid credentials.", http.StatusForbidden)
		}
	} else {
		http.Error(w, "Method not allowed.", http.StatusMethodNotAllowed)
	}
}

// Handles /signup
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

	} else {
		http.Error(w, "Method not allowed.", http.StatusMethodNotAllowed)
	}
}

// Handles /
func handleHome(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodGet {
		http.ServeFile(w, r, "index.html")
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
