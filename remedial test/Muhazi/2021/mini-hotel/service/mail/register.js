var nodemailer = require('nodemailer');
const fs = require('fs')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bobsams0305@gmail.com'
  }
});

const recipient = `
gerryajie@gmail.com, 
mail@adiraffael.my.id, 
muhaziramadhan261@gmail.com, 
bobysamuel123@gmail.com, 
nushairfalah@gmail.com
`
const template = `
<b>Welcome to our App.</b>
<p><img src ="cid:logo" style="width:500px;height:600px;"></img></p>
`
var mailOptions = {
  from: 'chefbox',
  to: recipient,
  subject: 'Sending Email using Node.js TESTING ',
  // text: 'testing email with image',
  html: template,
  attachments: [
    {
      filename: 'meme.jpeg',
      path: '../meme.jpeg',
      cid: 'logo' //my mistake was putting "cid:logo@cid" here! 
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