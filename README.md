# HTTPest - A BASH / cURL based API Testing tool

Docs to be written

## Installation

```shell
git clone https://github.com/viniciusfonseca/httpest.git
```

## Usage

Prerequisites: [bun](https://bun.sh/), [jq](https://github.com/jqlang/jq)

```shell
curl -fsSL https://bun.sh/install | bash
# run the source command echoed by bun install script

sudo apt install jq
```

Run the example API:

```shell
cd httpest/example
bun install
bun run api.ts
```

Then run the API test scripts on another shell:

```shell
../httpest/src local create_todo
../httpest/src local get_todos
../httpest/src local delete_todo
```