.PHONY: init build

SHELL = /bin/bash

init:
	@pnpm install
	@uv sync

dev:
	@pnpm dev

build:
	@mkdir -p dist/ js/wasm/
	@cmake --preset emscripten-release
	@cmake --build --preset emscripten-release
	@wasm-split -q --strip --strip-names build/demo.wasm -o js/wasm/demo.wasm -d build/demo.debug.wasm --external-dwarf-url=demo.debug.wasm
	@cp build/demo.js js/wasm/demo.js
	@pnpm build
	@uv run sentry-cli sourcemaps inject dist/assets/
	@cp build/demo.debug.wasm dist/assets/

upload:
	@uv run sentry-cli sourcemaps upload dist/assets/
	@uv run sentry-cli debug-files upload --include-sources build/demo.debug.wasm --wait
