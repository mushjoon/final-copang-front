const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://192.168.0.86:8080",
      changeOrigin: true,
    })
  );
};
