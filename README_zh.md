# Emscripten 演示

本项目演示了一个基于 Emscripten 的 WebAssembly (Wasm) 应用的最小化配置。它包含一个由 JavaScript 调用的 C++ `divide` 函数，展示了类似项目的典型工程实践。

## 特性

* **最小化项目配置**：使用 CMake 进行 C++ 构建，Vite 进行前端打包，Vitest 进行测试。
* **IDE 集成**：为 VSCode 等编辑器配置了 `clangd` 集成，支持 C++ 代码的函数跳转、自动补全等功能。
* **VSCode 调试**：支持在 VSCode 中对 C++ 代码进行断点调试，例如在运行 Vitest 测试时。
* **Sentry 集成**：捕获 C++ 异常并将其发送到 Sentry，能够完整展示 JavaScript 和 C++ 的错误堆栈（利用 sourcemap 和调试文件）。
* **优化 Wasm**：在编译时使用 `wasm-split` 去除 Wasm 模块中的调试信息，避免在生产环境中泄露敏感信息。

## 使用方法

准备依赖和配置文件：

```bash
$ direnv allow .
$ make init
$ cp .env.example .env
$ cp .sentryclirc.example .sentryclirc
$ vim .env  # 设置 Sentry DSN
$ vim .sentryclirc  # 设置 Sentry org, project, 和 auth token
```

安装 wasm-split: https://github.com/getsentry/symbolicator/releases/

构建项目，并上传 sourcemap 和调试文件到 Sentry：

```bash
$ make build upload
```

在浏览器中打开 `http://localhost:3000`。如果发生错误（例如除以零），将会向 Sentry 发送一个事件。

## 参考资料

- [Chrome 博客 - 更快的 Wasm 调试](https://developer.chrome.com/blog/faster-wasm-debugging)
- [Emscripten - 从 Javascript 调用 C++ 代码](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html)
- [Emscripten - C++ 异常支持](https://emscripten.org/docs/porting/exceptions.html)
- [VSCode - 调试 WebAssembly](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_debugging-webassembly) 
