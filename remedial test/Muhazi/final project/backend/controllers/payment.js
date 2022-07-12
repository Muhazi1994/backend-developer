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
  // Endpoint Payment
  async checkout(req, res, next) {
    try {
      const token = req.headers.token;
      const hasToken = decodeToken(token);
      const findAmount = await order.findOne({
        where: { id: req.params.id },
      });

      const paymentPayload = {
        external_id: `${findAmount.id}`,
        amount: findAmount.priceTotal,
        payer_email: hasToken.email,
        description: "Please finish your invoice!!!",
        should_send_email: true,
        invoice_duration: 3600, // 1h
        customer: {
          given_names: hasToken.name,
          email: hasToken.email,
        },
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

  // Endpoint CallbackURL
  async callback(req, res, next) {
    try {
      await order.update(
        {
          status: "paid",
        },
        {
          where: { id: req.body.external_id },
        }
      );

      res.status(200).json({ success: true, message: ["payment success"] });
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  },
};
