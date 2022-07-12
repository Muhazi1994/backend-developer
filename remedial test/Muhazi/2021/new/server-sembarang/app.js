const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(cookieParser());

const userRouter = require('./routes/user')
const jobRouter = require('./routes/job')
const carRouter = require('./routes/car')

app.get('/', async (req, res, next) => {
    try {
        res.send('testing..................')
    }
    catch(err) {
        res.send(err)
    }
})

const cloudinary = require('cloudinary').v2
cloudinary.config({ 
    cloud_name: 'dquhych7x', 
    api_key: '614927963312361', 
    api_secret: 'cF1wujnyq6PRfolbWBbaUurzDa4' 
})



app.get('/upload', (req, res, next) => {
    try {
        // 1. upload file ke direktori server pake multer, dapatkan path file tsb
        // 2. gunakan path file yang sudah ada di direktori sbg path utk upload di cloudinary
        
        console.log('uploading....')
        cloudinary.uploader.upload("./public/backend.png", function(error, result) {
            console.log(result, error)
            res.status(200).json({data: result})
        });

    }
    catch(err) {
        res.send(err)
    }
})

app.use(userRouter)
app.use(jobRouter)
app.use(carRouter)


app.use((err, req, res, next) => {
    res.status(500).json({
        error: err
    })
})

app.listen(3005, () => console.log(`app is up und running smoothly`))

module.exports = app

// mongodb+srv://bob:<password>@cluster0.glv5l.mongodb.net/test