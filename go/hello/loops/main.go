package loops

import "fmt"

func Count(start, finish int) {
	for i := start; i < finish; i++ {
		fmt.Print("Count ")
		fmt.Println(i)
	}
}