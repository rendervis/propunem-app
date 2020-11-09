//Dependencies
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
require("./services/passport");

const { APP_SECRET } = require("../../environment_config/keys");

///////routes
const accountRouter = require("./api/account");
const proposalRouter = require("./api/proposal");
const aboutUsRouter = require("./api/aboutUs");
const ourApproachRouter = require("./api/ourApproach");
const offerRouter = require("./api/offer");
const optionCardRouter = require("./api/optionCard");
const userAccountRouter = require("./api/userAccount");
const authGoogleRouter = require("./api/authGoogle");
const nodemailerRouter = require("./api/nodemailer");

const isProduction = process.env.NODE_ENV === "production";
//Init
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(APP_SECRET));

// app.use(
//   cookieSession({
//     name: "googleSession",
//     keys: [APP_SECRET],
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     // secureProxy: true,
//   })
// );

// app.use(cors());
// let corsOptions = {
//   origin: isProduction
//     ? "https://vispropunem.herokuapp.com/ "
//     : "http://localhost:3000",
//   optionsSuccessStatus: 200,
//   credentials: true,
// };
// app.use(
//   cors({
//     methods: ["GET", "POST"],
//     origin: "http://localhost:3000",
//     optionsSuccessStatus: 200,
//     credentials: true,
//   })
// );

//Routes with sessionString
app.use("/api", accountRouter);
app.use("/api", userAccountRouter);
app.use("/api", proposalRouter);
app.use("/api", aboutUsRouter);
app.use("/api", ourApproachRouter);
app.use("/api", offerRouter);
app.use("/api", optionCardRouter);
app.use("/api", nodemailerRouter);

//-memory unleak---------
app.set("trust proxy", 1);
//Session config
app.use(
  session({
    name: "googleSession",
    secret: APP_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      secure: isProduction ? true : false,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// app.get("/", (req, res) => {
//   res.send("this is working");
//   // console.log(req);
//   // console.log("Cookies: ", req.cookies);
//   // console.log("Signed Cookies: ", req.signedCookies);
// });

//Routes with oauth
app.use("/auth", authGoogleRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    type: "error",
    message: err.message,
  });
});

if (isProduction) {
  const path = require("path");
  app.use(express.static(path.join(__dirname, "../../client/build")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
  });
}

module.exports = app;
