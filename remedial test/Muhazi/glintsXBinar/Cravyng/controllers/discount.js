const { db } = require("../models/discount");
const { Op } = require("sequelize");

class Discount {
    static async discountPrice (req, res, next) {
    let { discount, minOrderValue } = req.body;
    var discontuse = discount/100;
    var totalPrice = minOrderValue - (minOrderValue * discontuse);
    console.log(totalPrice)

    try {
        let Price = await db.discount.create({
           
        discount: discontuse,
        minOrderValue: minOrderValue,
        finalPrice: totalPrice,
        });
         
        if (!Price){
            throw new error;
        }
        return res.status(200).json({
            "Success": [{
                "msg": "Discount Works",
                "data": Price
            }] 
        })
        
    } catch(err) {
        return res.status(500).json({
            "success": false,
            error: err.message
        })
    }
   
}
}
 module.exports = Discount;
 

