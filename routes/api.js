var express = require('express');
var Router = express.Router();
var multer = require('multer');
var mongoose = require('mongoose');
let mongojs = require('mongojs');
let config = require('../config/Config')
let db = mongojs('mongodb://' + config.db.user + ":" + config.db.pwd + '@ds135956.mlab.com:35956/nodep');

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

Router.route('').get(function (req, res) {
    res.json('Hello');
})
Router.route('/profile').post(upload.single('userAvatar'), function (req, res, next) {
    res.send({
        message: req.file
    })
})