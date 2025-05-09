.PHONY: init build

SHELL = /bin/bash

init:
	@pnpm install
	@uv sync

dev:
	@pnpm dev

build:
	@mkdir -p dist js/wasm
	@cmake --preset emscripten-release
	@cmake --build --preset emscripten-release
	@cp build/demo.js js/wasm/demo.js
	@cp build/demo.wasm js/wasm/demo.wasm
	@pnpm build
	@uv run sentry-cli sourcemaps inject dist/assets/

upload:
	@uv run sentry-cli sourcemaps upload dist/assets/
