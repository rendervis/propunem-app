const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");

///////api
const accountRouter = require("./api/account");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("this is working");
});

app.use("/inregistrare", accountRouter);
app.use("/profil", accountRouter);

module.exports = app;
