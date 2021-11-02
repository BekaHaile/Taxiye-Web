var nodemailer = require("nodemailer");

var mail = nodemailer.createTransport({
  host: `${process.env.SMTP_HOST}`,
  auth: {
    user: `${process.env.SUPPORT_USER_EMAIL}`,
    pass: `${process.env.SUPPORT_USER_PASS}`,
  },
});

export default (req, res) => {
  var mailOptions = {
    from: `"${req.body.full_name} ${req.body.email}" <${process.env.SUPPORT_USER_EMAIL}>`,
    to: req.body.send_to
      ? `${req.body.send_to}`
      : `${process.env.SUPPORT_EMAIL}`,
    subject: `${req.body.subject}`,
    text: `${req.body.message}`,
  };

  if (req.method == "POST") {
    mail.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.statusCode = 400;
        res.json("We are unable to send, Please try again!");
      } else {
        console.log("Email sent: " + info.response);
        res.statusCode = 200;
        res.json("Email sent: " + info.response);
      }
    });
  } else {
    res.statusCode = 400;
    res.json("Method not found");
  }
};
