const nodeMailer = require("nodemailer");

var transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "slasheu1992@gmail.com",
    pass: "nsaj elvy xgpj miuv",
  },
});

var mailOptions = {
  from: "slasheu1992@gmail.com",
  to: "abdallah.taouil@gmail.com",
  subject: "Sending Email using Node.js",
  html:"<h1>hello abboud</h1>\
  <p>CH9awlek fel mlewi</p>\
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLj1-T9fdS4tvaIIC441k1H_F4h5CUXzjRz-p3R3K_A&s'>"
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
