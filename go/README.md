# Topics

| Anchor | Topics |
| ------ | ------ |
| [Setup](#setup) | running and building projects |
| [Go conventions](#testing) | testing |

<h2 id="setup">
  🧰 Downloads and Setup
</h2>
https://golang.org/dl/

### 🛠️ Running projects

```bash
go run hello/main.go
```

### 🛠️ Building project

```bash
# 0. For more details, read the docs:
go help buildmode
# and
go help build

# 1. build
go build hello/main.go

# 2. execute
./main
```

<h2 id="testing">
  GO Testing conventions
</h2>

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