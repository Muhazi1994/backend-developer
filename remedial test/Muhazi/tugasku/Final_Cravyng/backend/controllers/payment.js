
const { decodeToken } = require("../utils/index");
const { order, orderMenu, users, menu, discount} = require("../models");
// const nodemailer = require("nodemailer");
// const hbs = require("nodemailer-express-handlebars");
// const path = require("path");


const XENDIT_URL = "https://api.xendit.co/v2/invoices";
const XENDIT_KEY =
  "eG5kX2RldmVsb3BtZW50X3Z5RUFxUGcxakRjRHZ1UjFMZVpUaU5WTGJKVlJ3MnJrVjFldm45cWV2bHFqSWc3cWJkeWx5c2ROQU1lVG4zOg==";
paymentConfig = {
  headers: {
    authorization: `Basic ${XENDIT_KEY}`,
  },
}
const axios = require("axios");


module.exports = {
  async checkout(req, res, next) {
    try {
      const token = req.headers.token;
      const hasToken = decodeToken(token);
      const findAmount = await order.findOne({
        where: { id:req.param}
      })
      // let userId = "";
      // if (token) {
      //   const payload = decodeToken(token);
      //   userId = payload.id;
      // }
      
    //   const checkUser = await users.findOne({
    //     where: { id: +userId },
    //   });
    //   if (checkUser.id != userId) {
    //     return res.status(401).json({
    //       success: false,
    //       errors: [
    //         "You must signin first, because you don't have permission to access."
    //       ],
    //     });
    //   }s
    //  console.log(checkUser);
      // let amountOrder = await order.findOne({
      //   where: { userId: +userId, 
      //   },
      //   include: [
      //     {
      //     model: users,
      //     attributes: ["name"],
      //     },
      //        {
      //     model: users,
      //     attributes: ["email"],
      //     },
      //        {
      //     model: discount,
      //     attributes: ["image"],
      //     },
      //   ]
      // });
      // let name = amountOrder.users.name;
      // let email = amountOrder.users.name
      // // let description = amountOrder.discount.description;
      // // let disc = amountOrder.discount.disc;
      // // let minOrderPrice = amountOrder.discount.minOrderPrice;
      // // let code = amountOrder.discount.code;

      // const data = await orderMenu.findAll({
      //   // where: { orderId: req.query.orderId },
      //   where: { userId: +userId },

      //   attributes: {
      //     exclude: ["userId", "createdAt", "updatedAt", "deletedAt"],
      //   },

      //   include: [
      //     {
      //       model: menu,
      //       attributes: ["food"],
      //     },
      //     {
      //       model: menu,
      //       attributes: ["price"],
      //     },
      //     {
      //       model: menu,
      //       attributes: ["specialPrice"],
      //     },
      //   ],
      // });
     
      // const finalData = [];
      // for (let i = 0; i < data.length; i++) {
      //   const obj = {
      //     food: data[i].menu.food,
      //     price: data[i].menu.price,
      //     specialPrice: data[i].menu.specialPrice,
      //     quantity: 1,
      //     subTotalPrice: data[i].menu.price,
      //   };
      //   const idx = finalData.findIndex();
      //   (el) => el.food === data[i].menu.food;
      //   if (idx >= 0) {
      //     finalData[idx].quantity++;
      //     finalData[idx].subTotalPrice = finalData[idx].quantity * finalData[idx].price;
      //   } else {
      //     finalData.push(obj);
      //   }
      // }

      // let allDescription = [];
      // let finalAmount = [];
      // for (let i = 0; i < finalData.length; i++) {
      //   allDescription.push(
      //     " " + finalData[i] + " @ " + finalData[i].quantity + "pcs"
      //   );
      //   finalAmount.push(finalData[i].subTotalPrice);
      // }

      // /* Count all price */
      // let totalPrice = 0;
      // for (let i = 0; i < finalAmount.length; i++) {
      //   totalPrice += finalAmount[i];
      // }

        // const { amount, payer_email } = req.body;

        const paymentPayload = {
          external_id: "unique invoice number",
          amount,
          payer_email: hasToken.email,
          description: "silahkan selesaikan pembayaran",
          should_send_email: true,
          invoice_duration: 3600, // 1h
        };
      
      const paymentResponse = await axios.post(XENDIT_URL,paymentPayload,paymentConfig);
      res.status(200).json({
        success: true,
        message: "checkout success",
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
      res.status(200).json({message: req.body});
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  },
};

