// integrasi ke payment gateway

const XENDIT_URL = 'https://api.xendit.co/v2/invoices' // .env
const XENDIT_KEY = 'eG5kX2RldmVsb3BtZW50X25LTGZ5MjF0SnBZUkJnNHI0RDhVazBLM1VKbWZlemk5R0FvdlQ0M0pjd1c3a2ZKeFczT1AybHhZNVJ5Uw==' // HARUS BASE64 FORMAT, .env
const paymentConfig = {
  headers: {
    authorization: `basic ${XENDIT_KEY}`
  }
}
const axios = require('axios')


module.exports = {
  async checkout (req, res, next) {
    try {
      const { amount, email } = req.body
      
      const paymentPayload = {
        external_id: 'unique invoice number',
        amount,
        payer_email: email,
        description: 'macbook pro second',
        should_send_email: true,
        invoice_duration: 3600 // 1h
      }

      // always. always, simpan semua data yang kita kirim ke 3rd party service
      const paymentResponse = await axios.post(XENDIT_URL, paymentPayload, paymentConfig)
      res.status(200).json({
        success: true,
        message: 'checkout success',
        data: paymentResponse.data
      })
    }
    catch(err) {
      console.log(err)
      res.send(err)
    }
  }
}