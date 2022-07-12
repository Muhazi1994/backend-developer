// cron section
const cron = require('node-cron')
const { sendMail } = require('../mail/register2')

// const cronDictionary = {
//   // sec: '* * * * *',
//   min: '* * * * *',
//   hr: '',
// }

// min, jam, date, month, day
// day: 0-7, 7 = minggu

const recipient = 'muhaziramadhan261@gmail.com'
const runSchedule = () => {


  cron.schedule('* * * * *', () => {
    console.log(`send email to ${recipient}`)
    sendMail(recipient)
  })

  
}
exports.runSchedule = runSchedule