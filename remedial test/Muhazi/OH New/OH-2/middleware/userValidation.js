module.exports = {
    async userDataValidation (req, res, next) {
        try {
            // do something here

            next() // go to next function
        }
        catch(err) {
            next(err)
        }
    }
}