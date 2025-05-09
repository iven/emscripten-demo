# Emscripten Demo

## Usage

Prepare dependencies and configuration files:

```bash
$ make init
$ cp .env.example .env
$ cp .sentryclirc.example .sentryclirc
$ vim .env  # Set sentry DSN
$ vim .sentryclirc  # Set sentry org, project and auth token
```

Build and upload sourcemaps and debug files to sentry:

```bash
$ make build upload
```

Open `http://localhost:3000` in browser, and it'll send an event to sentry.

## References

- [Chrome Blog - Faster Wasm Debugging](https://developer.chrome.com/blog/faster-wasm-debugging)
- [Emscripten - Call C++ Code from Javascript](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html)
- [Emscripten - C++ Exception Support](https://emscripten.org/docs/porting/exceptions.html)
- [VSCode - Debugging WebAssembly](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_debugging-webassembly)
