export default function (req, res) {
  var nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({
    host: "mail.smtp2go.com",
    port: 2525,
    secure: false,
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD,
    },
    logger: true,
    transactionLog: true, // include SMTP traffic in the logs
    // allowInternalNetworkInterfaces: false
  });

  console.log(res, "this is the response");
  transporter.sendMail(
    {
      from: "info@copiersutah.com ",
      to: "info@copiersutah.com",
      subject: `Quote form from ${req.body.name} My number is ${req.body.number}`,
      text: req.body.message,
    },
    function (error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log("Message sent: " + response.message);
      }
    }
  );
  res.json({ kale: "hamm" });
}
