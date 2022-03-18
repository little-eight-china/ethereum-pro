# react demo

## 步骤
依次执行命令
- npm instal ： 下载，可能因为网络原因下载失败，多执行几次直到没有报错。
- npm run start ： 本地启动项目


## 如何开发
可参考[官网](https://pro.ant.design/zh-CN/docs/new-page)

### 新建页面
在/src/pages下新建目录，比如test，然后新建index.tsx，作为展示页。

### 配置路由
配置跳转路由，在 config/router.ts下，参考 /test的配置即可

### 配置后端服务
后端放在 /src/services。
以钱包的api为例子，这里新建了一个wallet.ts

### 访问后端服务
这个参照/src/pages/test/wallet/index.tsx, 调用connectWallet
