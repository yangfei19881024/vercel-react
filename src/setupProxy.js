const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/activity', {
      // 这里需要代理的 接口地址
      target: 'http://api-test.foodism.cc/gateway/bearApi/',
      changeOrigin: true,
      pathRewrite: {},
    })
  );
};
// 参考
// module.exports = function (app) {
//   app.use(
//     createProxyMiddleware('/api', {
//       // 这里需要代理的 接口地址
//       target: 'http://api-test.foodism.cc/gateway/bearApi/',
//       changeOrigin: true,
//       pathRewrite: {
//         '^/api': '',
//       },
//     })
//   );
// };
