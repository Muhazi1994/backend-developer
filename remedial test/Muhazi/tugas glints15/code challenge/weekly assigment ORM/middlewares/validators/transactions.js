const validator = require('validator');
const { good } = require('../../models')
exports.createOrUpdateTransactionValidator = async (req, res, next) => {
    try {
        const error = [];
        if (!validator.isInt(req.body.id_good)) {
            error.push(`ID Good must be a number!`);   
        }
        if (!validator.isInt(req.body.id_customer)) {
            error.push(`ID customer must be a number!`);
        }
        if (!validator.isInt(req.body.quantity)) {
        error.push(`Quantity must be a number!`);
        }
        if (error.length > 0) {
            return res.status(400).json({ error: errors})
        }
        //find good, price and total
        const findGood = await good.findOne({ where: {id: req.body.id_good}})
        console.log(findGood);
        if (!findGood) {
            errors.push(`Good is not exist`)
        }
        if (errors.length > 0) {
            return res.status(400).json({ error:errors});
        }
        const { price } = findGood;
        req.body.total= parseFloat(req.body.quantity) * parseFloat(price);
        next();
    } catch (error) {
        res.status(400).json({ erros:['Bad Request']})
    }
    }
