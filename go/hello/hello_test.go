package main

import "testing"

func TestHello(t *testing.T) {
	assertCorrectMessage := func(t testing.TB, got, expect string) {
		t.Helper()
		if got != expect {
			t.Errorf("got: %q\nexpect: %q", got, expect)
		}
	}

	t.Run("Hello should greet the name passed", func(t *testing.T) {
		got := Hello("Nick")
		expect := "Hello, Nick"
		assertCorrectMessage(t, got, expect)
	})

	t.Run("Hello should return 'Hello, world' if empty string is passed", func(t *testing.T) {
		got := Hello("")
		expect := "Hello, world"
		assertCorrectMessage(t, got, expect)
	})
}
