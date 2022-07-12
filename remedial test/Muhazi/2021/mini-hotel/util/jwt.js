const jwt = require('jsonwebtoken')
const jwt_secret = 'mini_hotel' // JANGAN DIEXPOSEEEEEEEEEEEEEEEE !!!!

module.exports = {
    encrypt (payload) {
        const token = jwt.sign(payload, jwt_secret)
        // const token2 = jwt.sign(payload, 'MINI_HOTEL')
        return token
    },
    decrypt (token) {
        try {
            const payload = jwt.verify(token, jwt_secret)
            return payload
        }
        catch(err) {
            throw new Error(`UNAUTHORIZED!! ${err.message}`)
        }
    }
}