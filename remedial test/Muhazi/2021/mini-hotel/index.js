const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
require('dotenv').config()

app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(cookieParser());

// ---- CORS setting
const cors = require('cors')
const corsOptions = {
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
app.use(cors(corsOptions));


const customerRoute = require('./routes/customer')
app.use(customerRoute)

const { runSchedule } = require('./service/schedule/main')
// runSchedule()

app.post('/invoice', (req, res) => {
  try {
    // bikin pdf dulu
    // kirim pake nodemailer

    // bikin pdf, 
    // butuh, template HTML, butuh data untuk dimap ke HTML template

    // utk email, butuh recipient dan file information (filename dan path) sebagai attachments
    
    const { email } = req.body
    const { sendMail } = require('./service/mail/invoice')
    const pdfCreator = require('./service/invoice pdf/main')
    // const orders = [
    //   {
    //     item: 'sepatu',
    //     quantity: 5,
    //     price: 10000
    //   }
    // ]
    const invoice = 'INV/2021/12/01/1' // dynamic
    pdfCreator({ invoice, orders })
    sendMail(email, invoice)
  }
  catch(err) {
    res.status(500).send(err.message)
  }
})

app.listen(3000, () => console.log(`app is up und running smoothly at port 3000`))
module.exports = app