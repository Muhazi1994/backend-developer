var nodemailer = require('nodemailer');
const fs = require('fs')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bobsams0305@gmail.com'
  }
});

const template = name => 
`
<b>Welcome ${name} to our App !!!!.</b>
<p><img src ="cid:logo" style="width:500px;height:600px;"></img></p>
`

exports.sendMail = recipient => {
  try {
    console.log(`sending email to ${recipient}`)
    const nameFromEmail = recipient.split('@')[0]
    const mailOptions = {
      from: 'chefbox',
      to: recipient,
      subject: 'Your registration is complete',
      html: template(nameFromEmail),
      attachments: [
        {
          filename: 'meme.jpeg',
          path: './service/mail/meme.jpeg',
          cid: 'logo'
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