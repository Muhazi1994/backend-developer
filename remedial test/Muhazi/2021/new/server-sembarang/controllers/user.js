// controller for user
const models = require('../models')
const { Op } = require('sequelize')

const {
    Job,
    Order,
    User
} = models

const { today } = require('../utiils/commonFunctions')

module.exports = {
    async createUser (req, res, next) {
        const dbTransaction = await models.sequelize.transaction()
        // transaksi berguna untuk commit dan rollback.
        // as a guard, kalau create data gagal
        try {
            // validasi request payload
            console.log(req.file)
            const createdUser = await User.create(req.body, { transaction: dbTransaction })
            // await User.bulkCreate([{}, {}, {}, {}])
            await dbTransaction.commit()

            res.status(201).json({
                success: true,
                message: 'sukses create user',
                data: createdUser
            })
        }
        catch(err) {
            await dbTransaction.rollback()
            res.status(400).json({
                success: false,
                message: 'gagal create user',
                data: req.body
            })
        }
    },
    async updateUser (req, res, next) {
        const dbTransaction = await models.sequelize.transaction()
        try {
            // validasi request payload
            const { user_id } = req.params
            await User.update(req.body, {
                where: { id: user_id },
                transaction: dbTransaction 
            })
            await dbTransaction.commit()

            res.status(200).json({
                success: true,
                message: 'sukses update user',
                data: {
                    updatedField: req.body
                }
            })
        }
        catch(err) {
            await dbTransaction.rollback()
            res.status(400).json({
                success: false,
                message: 'gagal update user',
                data: req.body
            })
        }
    },
    async getOneUser (req, res, next) {
        try {
            // validasi request payload
            const { user_id, firstname } = req.query
            const filter = []
            if (user_id) filter.push({ id: user_id })
            if (firstname) filter.push({ firstname })

            const userData = await User.findOne({
                where: {
                    [Op.or]: filter
                },
                attributes: {
                    exclude: [
                        'createdAt',
                        'updatedAt',
                        'password',
                        'job'
                    ]
                },
                // include: [
                //     {
                //         model: Job,
                //         as: 'job_detail',
                //         attributes: ['id','name']
                //     }
                // ]
                // where    -> filter
                // attributes -> column selection
                // include -> join
                // limit 
                // offset
                // transaction
                // group
                // order 
            })
            if (!userData) {
                return res.status(404).json({
                    success: false,
                    message: `user not found`,
                    data: req.query
                })
            }
            
            res.status(200).json({
                success: true,
                message: 'sukses update user',
                data: userData
            })
        }
        catch(err) {
            console.log(err)
            res.status(400).json({
                success: false,
                message: 'gagal get user' || err.message,
                data: req.body
            })
        }
    },
    async getAllUser (req, res, next) {
        try {
            const { 
                page = 1, 
                limit = 10, 
                startDt = '1900-12-12', 
                endDt = today(), 
                'od.dob': dob
            } = req.query

            
            const order = [['id', 'DESC']]
            if (dob) order.unshift(['dob', dob])
            const options = {
                where: {
                    is_verified: true,
                    dob: {[Op.between]: [startDt, endDt]}
                },
                attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt', 'email', 'address']
                },
                order,
                limit: +limit,
                offset: ( +page - 1 ) * parseInt(limit)
            }

            const allUsers = await User.findAll(options)
            // next()
            res.status(200).json({
                data: allUsers
            })
        }
        catch(err) {
            next(err)
        }
    }
}

