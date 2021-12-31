package main

import "fmt"

func main () {
	fmt.Println(Hello("world"))
}

const greet = "Hello, "

func Hello(name string) string {
	if name == "" {
		name = "world"
	}
	return greet + name
}