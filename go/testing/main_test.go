package main

import "testing"

func TestFunc(t *testing.T) {
	got := sayHello()

	if got != "hello world" {
		t.Error("sayHello() doesnt return 'hello world'")
	}
}
