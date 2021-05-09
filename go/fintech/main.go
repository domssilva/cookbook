package main

import (
	"encoding/csv"
	"fmt"
	"os"
	"strconv"
)

func main() {
	csvFile, err := os.Open("./values.csv")
	if err != nil {
		fmt.Println(err)
	}

	csvLines, err := csv.NewReader(csvFile).ReadAll()
	if err != nil {
		fmt.Println(err)
	}

	var sum int64
	for _, line := range csvLines {
		i, err := strconv.ParseInt(line[1], 10, 64)
		if err != nil {
			fmt.Println(err)
		}
		sum += i
	}

	fmt.Println("Total sum = ", sum)
	defer csvFile.Close()
}
