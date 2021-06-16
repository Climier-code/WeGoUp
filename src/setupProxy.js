const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/request/", {
            target: "https://api.qwer.pw/",
            changeOrigin: true,
        })
    );
};
