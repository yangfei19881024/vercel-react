## 修改日志

2022/1/21

##### 参考 https://www.html.cn/create-react-app/docs/proxying-api-requests-in-development/

##### 添加 跨域设置

##### 在 `src` 文件夹下 新建`setupProxy.js` 文件，设置好跨域后，只要 `npm run start` 即可

2022/1/23

#### 添加手机调试本地开发环境

```js
config.devServer = {
  port: '0.0.0.0',
};
```

2022/2/7

### 修改 source-map 的值,方便 sentry 定位错误

### 修改 publicPath 的路径 把// 改成 https

2020/2/9

### 路由中添加 webpack 魔法注释

```js
/* webpackPrefetch: true */ //给脚本加上 rel="prefetch"
/* webpackChunkName: 'user'*/ //给懒加载的脚本起名
```

为了上 上面 webpackChunkName: 'xxxx'生效 还需要在 webpack 中配置

```js
output: {
  chunkFilename: 'chunks/[name].[chunkhash:8].js',
}
```
