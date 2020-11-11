require("dotenv").config();
const { Router } = require("express");
const nodemailer = require("nodemailer");
let multer = require("multer");

// var upload = multer({ dest: __dirname + "/public/uploads/" });
// var type = upload.single("pdfBlob");

// SET STORAGE
let json;
var storage = multer.diskStorage({
  destination: __dirname + "/uploads/",
  filename: function (req, file, cb) {
    if (file.mimetype === "application/pdf") {
      cb(null, `oferta` + `.pdf`);
    }
  },
});
let upload = multer({ storage: storage });
// let upload = multer({ dest: __dirname + "/uploads/" }).single("file");

const router = new Router();

///////with transporter
// const transport = {
//   //   host: smtp.gmail.com, // e.g. smtp.gmail.com
//   //   service: "yahoo",
//   //   host: "smtp.mail.yahoo.com",
//   //   port: 465,
//   //   secure: false,
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_ADDRESS,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// };
// const transporter = nodemailer.createTransport(transport);
// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("All works fine, congratz!");
//   }
// });

/***  nodemailer-promise   ***/
const mailer = require("nodemailer-promise");
var sendEmail = mailer.config({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

/***  route   ***/
router.post(
  "/send-email",
  upload.fields([
    { name: "file", maxCount: 1 },
    { name: "json", maxCount: 1 },
  ]),
  (req, res, next) => {
    const path = require("path");

    let inputFields = JSON.parse(req.body.json);
    // console.log("inputFields", inputFields);
    const name = inputFields.nume_client;
    const email = inputFields.e_mail;
    /*with nodemailer-promise*/
    const message = {
      from: name,
      to: email,
      // subject: 'Message title',
      // text: 'Plaintext version of the message',
      html: "<p>HTML version of the message</p>",
      attachments: [
        {
          filename: "oferta.pdf",
          path: path.join(__dirname, "/uploads", "oferta.pdf"),
        },
      ],
    };
    sendEmail(message)
      .then((info) => {
        res.json({
          message: "success",
          type: "success",
        });
      }) // if successful
      .catch((error) => next(error));
  }
);

module.exports = router;
