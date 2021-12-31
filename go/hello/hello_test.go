package main

import "testing"

func TestHello(t *testing.T) {
	got := Hello()
	expect := "Hello, world"

	if got != expect {
		t.Errorf("got: %q\nexpect: %q", got, expect)
	}
}