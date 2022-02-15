const path = require('path');
const isProd = process.env.REACT_APP_ENV === 'production';
module.exports = function override(config, env) {
  // sourcemap
  config.devtool = isProd ? 'hidden-source-map' : 'eval-cheap-module-source-map';
  // 手机可以 打开本地代码，方便调试
  // 在手机打开的链接为 把 项目链接 localhost:3000/xxxx 换成 电脑IP:3000/xxxx
  config.devServer = {
    port: '0.0.0.0',
  };

  config.output = {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle-[chunkhash:8].js',
    chunkFilename: 'chunks/[name].[chunkhash:8].js',
  };
  return config;
};
