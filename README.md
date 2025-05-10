# Emscripten Demo

[中文版](/README_zh.md)

This project demonstrates a minimal setup for an Emscripten-based WebAssembly (Wasm) application. It features a C++ `divide` function called from JavaScript, showcasing a typical engineering setup for similar projects.

## Features

*   **Minimal Project Setup**: Uses CMake for C++ build, Vite for frontend bundling, and Vitest for testing.
*   **IDE Integration**: Configured for `clangd` integration in editors like VSCode, enabling features like code navigation and auto-completion for C++ code.
*   **VSCode Debugging**: Supports debugging C++ code with breakpoints in VSCode, for instance, when running Vitest tests.
*   **Sentry Integration**: Captures C++ exceptions and sends them to Sentry with full JavaScript and C++ stack traces (utilizing sourcemaps and debug files).
*   **Optimized Wasm**: Uses `wasm-split` to strip debug information from the Wasm module at build time, preventing sensitive information leakage in production.

## Usage

Prepare dependencies and configuration files:

```bash
$ direnv allow .
$ make init
$ cp .env.example .env
$ cp .sentryclirc.example .sentryclirc
$ vim .env  # Set Sentry DSN
$ vim .sentryclirc  # Set Sentry org, project, and auth token
```

Install wasm-split: https://github.com/getsentry/symbolicator/releases/.

Build the project, and upload sourcemaps and debug files to Sentry:

```bash
$ make build upload
```

Open `http://localhost:3000` in your browser. An event will be sent to Sentry if an error occurs (e.g., division by zero).

## References

- [Chrome Blog - Faster Wasm Debugging](https://developer.chrome.com/blog/faster-wasm-debugging)
- [Emscripten - Call C++ Code from Javascript](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html)
- [Emscripten - C++ Exception Support](https://emscripten.org/docs/porting/exceptions.html)
- [VSCode - Debugging WebAssembly](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_debugging-webassembly)
