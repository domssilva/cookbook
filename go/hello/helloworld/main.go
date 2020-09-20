package helloworld

import "fmt"

func Greet() {
	fmt.Println("Hello World")
}

func GreetPerson(name string) {
	fmt.Printf("Hello %s, nice to meet you!\n", name)
}
