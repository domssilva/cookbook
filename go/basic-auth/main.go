package main

import (
	"log"
	"net/http"
)

func main() {
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

// Middleware that logs "{req method} {req path}"
func logRequest(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		log.Println(r.Method, r.URL.Path)
		next(w, r)
	}
}
