var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "khaledmuhammedmomen@gmail.com",
    pass: "mo2men@2468",
  },
});

var mailOptions = {
  from: "khaledmuhammedmomen@gmail.com",
  to: "momenk208@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
