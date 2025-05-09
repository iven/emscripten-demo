.PHONY: init build

UNAME := $(shell uname)

init:
	@pnpm install
	@uv sync

dev:
	@pnpm exec vite --port=3000

build:
	@mkdir -p dist js/wasm
	@emcc -fwasm-exceptions -sEXCEPTION_STACK_TRACES=1 -sMODULARIZE=1 -sASSERTIONS -sEXPORT_ES6=1 --no-entry -std=c++11 -lembind -g -O3 -o js/wasm/demo.js wasm/demo.cpp wasm/hack.cpp
	@pnpm exec vite build
	@uv run sentry-cli sourcemaps inject dist/assets/

upload:
	@uv run sentry-cli sourcemaps upload dist/assets/
