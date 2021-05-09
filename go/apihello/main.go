package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

// http://fakeapi.jsonparseronline.com/posts
func main() {
	resp, err := http.Get("http://fakeapi.jsonparseronline.com/posts")
	if err == nil {
		fmt.Println(err)
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err == nil {
		response := string(body)
		fmt.Println(response)
	}
}
