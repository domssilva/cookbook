package main

import (
	"net/http"
)

// create handler struct
type HttpHandler struct{}

// implement ServeHTTP method on my handler
func (h HttpHandler) ServeHTTP(res http.ResponseWriter, req *http.Request) {
	// binary data for response
	data := []byte("Welcome to my server.")

	// send data as response
	res.Write(data)
}

func main() {
	requestHandler := HttpHandler{}

	// start HTTP server + lock the process
	http.ListenAndServe(":5003", requestHandler)
}
