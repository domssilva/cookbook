package main

import "fmt"

func main() {

	var number int = 5

	fmt.Println("number =", number)
	
	// pointer to number (get number's memory address)
	fmt.Println("&number =", &number)
	
	// declare pointer variable to store number's address
	var numberCopy *int = &number
	
	// modify number using its pointer
	*numberCopy = 10
	
	fmt.Println(number)
}