# Emscripten Demo

## 首次使用

安装依赖和初始化配置：

```bash
$ make init
$ cp ./.env.example ./.env
$ vim ./.env  # 配置 Sentry 环境变量
```

构建并上传 sourcemap：

```bash
$ make build upload
```

在浏览器中打开网页：http://localhost:3000
