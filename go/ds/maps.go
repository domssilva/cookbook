package main

import "fmt"

func main() {
	country := make(map[string]string)
	country["name"] = "Italy"
	fmt.Println(country["name"])
}
