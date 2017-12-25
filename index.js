var express = require('express');
var multer = require('multer')
//var upload = multer({ dest: 'uploads/' });
//uploads le fichier dans lequel ils sont stockés les images 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now().toString() + '-' + file.originalname)
    }
});
var upload = multer({ storage: storage })
const app = express();
app.get('/', function (req, res) {
    res.json('Hello');
})
app.post('/profile', upload.single('userAvatar'), function (req, res, next) {
    // req.file is the `avatar` file userAvatar est le  nom du champ
    // req.body will hold the text fields, if there were any
    res.send({
        message: req.file
    })
})


var port = 8080;
app.listen(port, function () {
    console.log('Running on port ' + port)
})