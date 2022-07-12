const { decrypt } = require('../util/jwt')

module.exports = {
    async authenticateUser (req, res, next) {
        try {
            const { authorization: token } = req.headers
            // const token = req.headers.authorization
            if (!token) throw new Error('UNAUTHORIZED!!! token required')
            const payload = decrypt(token) // payload is an obj
            req.user = payload
            next()
        }
        catch(err) {
            res.status(401).json({
                success: false,
                message: err.message
            })
        }
    }
}