// const { customer } = require('../models')
const { encrypt } = require('../util/jwt')
const { sendMail: sendEmailRegistration } = require('../service/mail/register2')
const { sendMail: emailOTP } = require('../service/mail/otp')
const jwt = require('jsonwebtoken')

const generateOTP = require('../util/otpGenerator')
const { UserOtp, otpAttempt } = require('../models')

module.exports = {
  async createCustomer (req, res, next) {
    try {
      const { email } = req.body
      // const data = await customer.create(req.body)
      
      sendEmailRegistration(email)
      res.status(201).json({
        data: req.body
      })
    }
    catch(err) {
      res.status(400).send(err.message)
    }
  },
  async getAllCustomers (req, res, next) {
    try {
      const data = await customer.findAll({})
      res.status(201).json({
        data
      })
    }
    catch(err) {
      console.log(err)
      res.status(400).send('error')
    }
  },
  async login (req, res, next) {
    try {
      const { name, password } = req.body // cek unique identifier
      // cek nama di db. ada ga?
      const data = await customer.findOne({
        where: { name },
        attributes: ['id', 'name', 'password']
      })
      if (!data) throw new Error(`user ${name} ga terdaftar`) // name ada
      if (data.password !== password) throw new Error(`password salah`) // cek password yg tersimpan di db = password yg user masukkan
      
      const token = encrypt({ id: data.id })
      
      res.status(201).json({
        success: true,
        message: `welcome, ${name} !!!`,
        token
      })
    }
    catch(err) {
      console.log(err.message)
      res.status(400).json({
        success: false,
        message: `WRONG PASSWORD !!!!!`
      })
    }
  },
  async loginOTP (req, res, next) {
    try {
      const { email } = req.body
      const OTP = generateOTP() // numeric string
      const otpData = await UserOtp.create({ email, code: OTP })
      await otpAttempt.create({ otp_id: otpData.id })

      await emailOTP(email, OTP)
      res.status(200).json({
        success: true,
        message: 'success send otp',
        data: { OTP }
      })
      /**
       * - masukin email/phone number
          - create random OTP code utk email/phone tsb

          - simpan di db. { code, email/phone } ke table UserOTP

          - kirim OTPnya ke email/phone/wa user
          - return ok
       */
    }
    catch(err) {
      res.send(err)
    }
  },
  async verifyOTP (req, res, next) {
    try {
      const { code, email } = req.body
      const [record] = await UserOtp.findAll({ 
        where: { email },
        order: [['id', 'desc']],
        attributes: ['id','code', 'email'],
        include: [
          {
            model: otpAttempt,
            as: 'attempts',
            attributes: ['attempt']
          }
        ],
        limit: 1
      })
      if (!record) throw new Error('email not registered')
      const { code: storedCode, attempts } = record // attempts is model
      if (attempts.attempt <= 3) {
        // do compare
        console.log('attempt < 3')
        if (code === storedCode) {
          console.log('code match')
          // bikin jwt payload here...
          // get user id by email
          // const userData = await getUserIDByEmail({ email })
          // const payload = { id: userData.id, email }
          // const token = jwt.sign(payload)
          return res.status(200).json({
            success: true,
            message: 'success login',
            token: 'yrtfcjyvgkbhlnjmkfv54657687hu9oinebv'
          })
        }
        else {
          // different code
          // attempt increase
          console.log('not match')
          await attempts.increment('attempt')
          return res.status(400).json({
            success: false,
            message: 'login failed'
          })
        }
      }
      else {
        console.log('max attempt')
        res.status(403).json({
          success: true,
          message: 'login failed. maximum attempt reached'
        })
      }
    }
    catch(err) {
      res.send(err)
    }
  },
  async getProfile (req, res, next) {
    try {
      const { id } = req.user // {id, iat}
      
      const profile = await customer.findOne({
        where: { id },
        attributes: ['id', 'name']
      })
      
      res.status(200).json({
        success: true,
        message: `success get profile`,
        data: profile
      })
    }
    catch(err) {
      console.log(err.message)
      res.status(400).json({
        success: false,
        message: `ERRRRRRR`
      })
    }
  }
}