---
order: 1
nav:
    title: 指南
    order: 1
---

# 快速上手

## 安装

```shell
yarn add xxxxx
```

## 按需加载

使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行按需加载

```json
{
    "extraBabelPlugins": [
        ["import", { "libraryName": "xxxxx", "style": "css" }, "xxxxx"]
    ]
}
```

## 使用

```js
import { A } from 'xxxxx';
```
