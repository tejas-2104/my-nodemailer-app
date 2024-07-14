const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: process.env.ETHEREAL_USER,
        pass: process.env.ETHEREAL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.ETHEREAL_USER,
      subject: `Contact form submission from ${name}`,
      text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send('Error sending email: ' + error.message);
      }
      res.send('Email sent: ' + info.response);
    });
  } catch (error) {
    res.status(500).send('Error sending email: ' + error.message);
  }
};
