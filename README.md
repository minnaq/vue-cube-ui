# ds-demo

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### by tim

1. `vue add cube-ui`
1. `vue add vuex`
1. `vue add router`

### json web token

1. OAuth：请深入了解 OpenAuth 2.0 相关文档(http://www.rfcreader.com/#rfc6749_line230)
1. 概念：令牌的具体定义方式
1. 规定：令牌由三部分组成："头.载荷.签名"
1. 头：包含加密算法、令牌类型等信息
1. 载荷：包含用户信息、签发时间和过期时间等信息
1. 签名：根据头、载荷以及秘钥加密得到的哈希串 Hmac Sha1 256
