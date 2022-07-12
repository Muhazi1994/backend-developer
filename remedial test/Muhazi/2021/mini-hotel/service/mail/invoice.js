var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bobsams0305@gmail.com'
  }
});

exports.sendMail = (recipient, filename) => {
  try {
    console.log(`sending invoice to ${recipient}`)
    const mailOptions = {
      from: 'chefbox',
      to: recipient,
      subject: 'INVOICE INV/2021/01/adi/1',
      text: 'Thank you sudah belanjaa',
      attachments: [
        {
          filename,
          path: './service/mail/meme.jpeg'
        }
      ]
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