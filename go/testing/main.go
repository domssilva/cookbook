package main

import (
  "fmt"
)

func main() {
  var msg[2]string

  msg[0] = "Hello"
  msg[1] = "Word"

  fmt.Println(msg)
}

func sayHello()(string) {
  return "hello world"
}
