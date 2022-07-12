var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bobsams0305@gmail.com'
  }
});

const template = code => ` <b>${code}</b> `

exports.sendMail = (recipient, code) => {
  try {
    console.log(`sending OTP code ${code} to ${recipient}`)
    const mailOptions = {
      from: 'samuelboby95@gmail.com',
      to: recipient,
      subject: 'One Time Password - OTP',
      html: template(code),
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
  catch(err) {
    throw err
  }
}
