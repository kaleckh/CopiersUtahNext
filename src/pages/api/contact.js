export default function (req, res) {
  var nodemailer = require("nodemailer");

  
  let transporter = nodemailer.createTransport(
    {
        host: "mail.smtp2go.com",
        port: 2525, 
        secure: false,
        auth: {
            user: "kaethebae",
            pass: "test"
        },
        logger: true,
        transactionLog: true, // include SMTP traffic in the logs
        // allowInternalNetworkInterfaces: false
    },
  
);

    console.log(transporter, "transporter")
  transporter.sendMail(
    {
      from: req.body.from,
      to: "kaleckh@gmail.com ",
      subject: "test",
      text: "this is the test",
    },
    function (error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log("Message sent: " + response.message);
      }
    }
  );
  
}
