package main

import (
	"fmt"
	"io"
	"net/http"
)

// create handler struct
type HttpHandler struct{}

// implement ServeHTTP method on my handler
func (h HttpHandler) ServeHTTP(res http.ResponseWriter, req *http.Request) {
	// binary data for response
	data := []byte("Welcome to my server.\n")

	// send data as response
	res.Write(data)

	io.WriteString(res, "What can I offer you?")
}

func main() {
	mux := http.NewServeMux()

	//handle routes
	mux.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {
		fmt.Fprint(res, "home page")
	})

	mux.HandleFunc("/help", func(res http.ResponseWriter, req *http.Request) {
		fmt.Fprint(res, "help page")
	})

	http.ListenAndServe(":5003", mux)
}

func allRequests() {
	requestHandler := HttpHandler{}

	// start HTTP server + lock the process
	http.ListenAndServe(":5003", requestHandler)
}
