const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/auth/google",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/auth/current_user",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/auth/logout",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/api/*",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/api/account/*",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
