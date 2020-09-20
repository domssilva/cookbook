## GO Testing conventions

1. test files **must** be named `<name>_test.go`
2. test function name must start with the word `Test`, i.e:

```go
func TestConverter(t *testing.T) {
  // execute tests here
}
```

running tests is as easy as running the following command on the terminal:
```bash
  go test
```