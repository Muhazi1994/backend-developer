const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(file)
      cb(null, './public')
    },
    filename: function (req, file, cb) {
        const { firstname, lastname } = req.body
        const _filename = `${firstname}-${lastname}-${Date.now()}.jpg`
        req.body.avatar = _filename
        // cb(null, file.fieldname + '-' + uniqueSuffix)
        cb(null, _filename)
    }
  })
  
exports.upload = multer({ 
  storage: storage
}) // options