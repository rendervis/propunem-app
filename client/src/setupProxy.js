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
    "/api/account/*",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/api/proposal/*",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/api/aboutus",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/api/aboutus/*",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/api/ourapproach",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/api/ourapproach/*",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/api/offer",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/api/offer/*",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/api/offer-sent",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/api/offer-sent/*",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/api/option-card",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/api/option-card/*",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/api/user",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/api/user/*",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/api/branding-declaration",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/api/branding-declaration/*",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );

  app.use(
    "/api/search/*",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/api/send-email",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    "/api/homepage-pdf/*",
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
