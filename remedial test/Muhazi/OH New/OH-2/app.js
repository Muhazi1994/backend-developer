const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(cookieParser());

const userRouter = require('./routes/user')
const jobRouter = require('./routes/job')

app.use(userRouter)
app.use(jobRouter)


app.use((err, req, res, next) => {
    res.status(500).json({
        error: err
    })
})
app.listen(3000, () => console.log(`app is up und running smoothly`))

module.exports = app