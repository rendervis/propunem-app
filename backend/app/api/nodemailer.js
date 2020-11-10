require("dotenv").config();
const { Router } = require("express");
const nodemailer = require("nodemailer");

const router = new Router();

///////with transporter
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

///////with nodemailer-promise
const mailer = require("nodemailer-promise");
var sendEmail = mailer.config({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

router.post("/send-email", (req, res, next) => {
  console.log("req.body", req.body);
  const name = req.body.nume_client;
  const email = req.body.e_mail;
  //   const message = req.body.messageHtml;
  // res.set("Content-Type", "application/json");

  /* WITH TRANSPORTER */
  // let mailOptions = {
  //   from: name,
  //   to: email,
  //   // replyTo: 'your_gmail@gmail.com'
  //   subject: "Contact form request",

  //   html: "<b>Hello world?</b>",
  // };
  // transporter.sendMail(mailOptions, (err, info) => {
  //   if (err) {
  //     res.json({
  //       status: "fail",
  //     });
  //     next(err);
  //   } else {
  //     res.json({
  //       status: "success",
  //     });
  //     console.log("info", info);
  //   }
  //   done();
  // });

  /*with nodemailer-promise*/
  const message = {
    from: name,
    to: email,
    // subject: 'Message title',
    // text: 'Plaintext version of the message',
    html: "<p>HTML version of the message</p>",
  };
  sendEmail(message)
    .then((info) => {
      console.log("info", info);
      res.json({
        message: "success",
        type: "success",
      });
    }) // if successful
    .catch((error) => next(error));
});

module.exports = router;
