package stringmanipulation

import (
	// "fmt"
	"strings"
)

func Capitalize(name string) (string) {
	return strings.Title(name)
}

func Swap(x, y string) (string) {
	return y, x
}