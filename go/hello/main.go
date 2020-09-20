package main

import (
	"./loops"
	"./helloworld"
	"./stringmanipulation"
)

func main() {

	// declaring variables
	var i int = 0
	max := 5

	name := stringmanipulation.Capitalize("john")

	loops.Count(i, max)
	helloworld.GreetPerson(name)

	fmt.Println(Swap("world", "hello"))
}