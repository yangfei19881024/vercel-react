## React 项目模版

### 本地 IDE 配置

- 在自己的 IDE 中安装 `eslint` `prettier` `editorconfig` 插件

### 本地开发环境

```bash
$ npm run start
```

### 上测试环境

```bash
$ npm run build:dev
```

### 上生产环境

```bash
$ npm run build:prod
```

### 生产环境特点

- sentry 监控
- 静态资源上传 CDN
- 代码按需加载

### 改项目目前有 3 个环境

- 本地开发环境 `process.env.REACT_APP_ENV===localdev`
- 测试环境 `process.env.REACT_APP_ENV===development`
- 生产环境 `process.env.REACT_APP_ENV===production`

### 项目如何发布到子目录

很多情况我们发布项目到 根目录下 http://www.baidu.com/index.html
为了充分利用 云服务器，我们需要把项目发布在子目录 比如http://www.baidu.com/h5/index.html http://www.baidu.com/pc/index.html
在 react 项目中 只需要 在 `package.json` 文件中配置 homepage: "h5" 这样即可

### 如何解决跨域问题

如果你的项目本地开发涉及到跨域问题,请在 `/src/setupProxy.js` 中做修改

### 测试环境和生成环境的接口 在哪定义?

```js
const API = {
  localdev: '本地开发环境 一般不填，需要在 src/setupProxy.js设置',
  // 根据你项目实际情况 改变
  development: '开发环境的接口',
  production: '生产环境接口',
};
```

参考 `src/service/http.ts` 中定义

### 如果 运行 npm run start 报错 请参考下面

- **Error: Command failed: git rev-parse HEAD
  fatal: not a git repository (or any of the parent directories): .git**

  > 运行 git init 可以解决

- **fatal: ambiguous argument 'HEAD': unknown revision or path not in the working tree.**

  > 运行 git commit --allow-empty -n -m "Initial commit." 可以解决
