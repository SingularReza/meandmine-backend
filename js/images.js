const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '|' + file.originalname.replace(/[_-]|\s/g, ""))
    }
})

var upload = multer({ storage: storage }).any()

exports.saveImages = upload