package main

import (
  "fmt"
)

func main() {
  // Go has built-in support for multiple return values
  john, dina := getNames()
  fmt.Println(john, dina)
}

func getNames()(string, string) {
  var names [2]string

  names[0] = "John"
  names[1] = "Dina"

  return names[0], names[1]
}
