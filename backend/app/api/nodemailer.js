require("dotenv").config();
const { Router } = require("express");
const nodemailer = require("nodemailer");

const router = new Router();

const transport = {
  //   host: smtp.gmail.com, // e.g. smtp.gmail.com
  //   service: "yahoo",
  //   host: "smtp.mail.yahoo.com",
  //   port: 465,
  //   secure: false,
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("All works fine, congratz!");
  }
});

router.post("/send-email", (req, res, next) => {
  console.log("req.body", req.body);
  const name = req.body.nume_client;
  const email = req.body.e_mail;
  //   const message = req.body.messageHtml;
  res.set("Content-Type", "application/json");

  /* Send email here */

  let mailOptions = {
    from: name,
    to: email,
    subject: "Contact form request",

    html: "<b>Hello world?</b>",
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        message: "fail",
      });
    } else {
      res.json({
        message: "success",
      });
    }
  });
  res.send({ message: "Email sent." });
});

module.exports = router;
