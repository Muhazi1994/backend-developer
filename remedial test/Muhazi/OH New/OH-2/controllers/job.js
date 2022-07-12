// controller for user
const models = require('../models')
const { Op } = require('sequelize')

const {
    Job,
    Order,
    User
} = models

module.exports = {
    async getAllJobs (req, res, next) {
        try {
            const allJobs = await Job.findAll({
                attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt', 'email', 'address']
                }
            })
            res.status(200).json({
                data: allJobs
            })
        }
        catch(err) {
            res.status(400).send(err)
        }
    }
}