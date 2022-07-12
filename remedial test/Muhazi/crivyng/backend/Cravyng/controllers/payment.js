// integrasi ke payment gateway
const { decodeToken } = require("../helpers/jwt");
const { order, orderMenu, users, menu, discount } = require("../models");
const XENDIT_URL = "https://api.xendit.co/v2/invoices"; // .env
const XENDIT_KEY =
  "eG5kX2RldmVsb3BtZW50X0t0aXhHd0RrcWZMWEtFT3hMSWdlbkt4bEM4MHRTdjltRG82NUl5dFNlQ3pSMGN1SzJDYlNqRkFGUEpFYmQ6"; // HARUS BASE64 FORMAT, .env
const paymentConfig = {
  headers: {
    authorization: `basic ${XENDIT_KEY}`,
  },
};
const axios = require("axios");
 module.exports = {
   async checkout(req, res, next) {
     try {
       const token = req.headers.token;
       const hasToken = decodeToken(token);
       const findAmount = await order.findOne({
         where: { id: req.params.id },
       });

       const paymentPayload = {
         external_id: "unique invoice number",
         amount: findAmount.priceTotal,
         payer_email: hasToken.email,
         description: "Please finish your invoice!!!",
         should_send_email: true,
         invoice_duration: 3600, // 1h
       };

       // always. always, simpan semua data yang kita kirim ke 3rd party service
       const paymentResponse = await axios.post(
         XENDIT_URL,
         paymentPayload,
         paymentConfig
       );
       res.status(200).json({
         success: true,
         message: "payment success",
         data: paymentResponse.data,
       });
     } catch (err) {
       console.log(err);
       res.send(err);
     }
   },

   async callback(req, res, next) {
     try {
       console.log(req.body);
       /**
      * callback payload from xendit/invoice service 
      {
        "id": "579c8d61f23fa4ca35e52da4", ------ important
        "external_id": "invoice_123124123", ------ important
        "user_id": "5781d19b2e2385880609791c", ------ important
        "is_high": true,
        "payment_method": "BANK_TRANSFER", ------ important
        "status": "PAID", ------ important
        "merchant_name": "Xendit",
        "amount": 50000, ------ important
        "paid_amount": 50000,
        "bank_code": "PERMATA", ------ important
        "paid_at": "2016-10-12T08:15:03.404Z", ------ important
        "payer_email": "wildan@xendit.co",
        "description": "This is a description", ------ important
        "adjusted_received_amount": 47500, ------ important
        "fees_paid_amount": 0,
        "updated": "2016-10-10T08:15:03.404Z",
        "created": "2016-10-10T08:15:03.404Z",
        "currency": "IDR",
        "payment_channel": "PERMATA", ------ important
        "payment_destination": "888888888888" ------ important
      }
      */
      await order.update(
        {
          status: "paid",
        },
        {
          where: { id: req.body.external_id },
        }
      );

       res.status(200).json({ message: req.body });
     } catch (err) {
       console.log(err);
       res.send(err);
     }
   },
 };
