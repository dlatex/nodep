var express = require('express');
var Router = express.Router();
var multer = require('multer');
var mongoose = require('mongoose');
let mongojs = require('mongojs');
let config = require('../config/Config');
let passport = require('../config/passport');
var jwt = require('jsonwebtoken');
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

Router.route('/user').get(function (req, res) {
    res.json('Hello');
})

Router.route('/login').post(function (req, res, next) {
    passport.authenticate('UserLogin', function (err, user, info) {
        if (err) return res.json({ status: false, error: err.message });
        else if (!user) return res.json({ status: false, error: "Invalid Credentials", });
        //if (!user) { return res.redirect('/login'); }
        else {
            req.logIn(user, function (err) {
                if (err) { req.logout(); return res.json({ status: false, error: err.message }) }
                var userObject = user.toObject();
                delete userObject.password;
                var token = jwt.sign({ id: userObject._id }, config.db.secret, {
                    expiresIn: '2h'
                });
                return res.status(200).json({
                    status: true,
                    error: [],
                    message: "Logged In Success",
                    user: userObject,
                    token: token
                });
            });
        }
    })(req, res, next);
});

Router.route('/profile').post(upload.single('userAvatar'), function (req, res, next) {
    res.send({
        message: "Hello"
    })
})
module.exports = Router;