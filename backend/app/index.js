//Dependencies
const express = require("express");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
require("./services/passport");

const { APP_SECRET } = require("../../environment_config/keys");

///////routes
const accountRouter = require("./api/account");
const userAccountRouter = require("./api/userAccount");
const brandingDeclarationRouter = require("./api/brandingDeclaration");
const proposalRouter = require("./api/proposal");
const aboutUsRouter = require("./api/aboutUs");
const ourApproachRouter = require("./api/ourApproach");
const offerRouter = require("./api/offer");
const offerSentRouter = require("./api/offerSent");
const optionCardRouter = require("./api/optionCard");
const authGoogleRouter = require("./api/authGoogle");
const nodemailerRouter = require("./api/nodemailer");
const searchBarRouter = require("./api/searchBar");

const isProduction = process.env.NODE_ENV === "production";
//Init
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(APP_SECRET));

//Routes with sessionString
app.use("/api", accountRouter);
app.use("/api", userAccountRouter);
app.use("/api", brandingDeclarationRouter);
app.use("/api", proposalRouter);
app.use("/api", aboutUsRouter);
app.use("/api", ourApproachRouter);
app.use("/api", offerRouter);
app.use("/api", offerSentRouter);
app.use("/api", optionCardRouter);
app.use("/api", nodemailerRouter);
app.use("/api", searchBarRouter);

//-memory unleak---------
app.set("trust proxy", 1);
//Session config
const session = require("express-session");
var MemoryStore = require("memorystore")(session);
app.use(
  session({
    name: "googleSession",
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      secure: isProduction ? true : false,
    },
    store: new MemoryStore({
      checkPeriod: 4 * 60 * 60 * 1000, // prune expired entries every 4h
    }),
    resave: false,
    secret: APP_SECRET,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//Routes with oauth
app.use("/auth", authGoogleRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    type: "error",
    message: err.message,
  });
  next();
});

if (isProduction) {
  const path = require("path");
  app.use(express.static(path.join(__dirname, "../../client/build")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
  });
}

module.exports = app;
