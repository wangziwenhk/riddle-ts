# Package Manager

## 文件格式
```toml
[package]
name = "example"
version = "1.0.0"
description = "Example Project"
authors = ["Alice <a@ex.com>"]

[dependencies]
json = { version = "^1.0", lib = "https://github/json/json.git" }

[dev-dependencies]
test = { version = "^1.0", lib = "https://github/wangziwenhk/test.git" }

[features]                       # 可选功能开关

```