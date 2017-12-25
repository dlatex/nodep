var mongoose = require('mongoose');
var validators = require('mongoose-validators');
var bcrypt = require('bcrypt');
let mongojs = require('mongojs');
var config = require('../config/Config');
let db = mongojs('mongodb://' + config.db.user + ":" + config.db.pwd + '@ds135956.mlab.com:35956/nodep');
var findOrCreate = require('mongoose-findorcreate');
let Schema = mongoose.Schema;
let userSchema = new Schema({
    lastname: {
        type: Schema.Types.String,
        required: true
    },
    firstname: {
        type: String,
        validate: [
            validators.isLength(1, 25)
        ]
    },
    email: {
        type: String,
        required: true,
        index: {
            unique: true
        },
        validate: [
            validators.isEmail()
        ]
    },
    password: {
        type: String,
        required: true,
        validate: [
            validators.isLength(8, 24)
        ]
    }
}, {
        collection: 'User', // table name
        toObject: {
            virtuals: true, // enable virtual fields
        },
        toJSON: {
            virtuals: true, // enable virtual fields
        },
    }).plugin(findOrCreate);
//User password encryption
userSchema.pre('save', function (next) {
    var user = this;
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
})
userSchema.methods.comparePassword = function (password, callback) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        if (err) return callback(err);
        else return callback(null, isMatch);
    });
};
//Virtual function which return complete name 
userSchema.virtual('name').get(function () {
    return this.firstname + " " + this.lastname;
});
var User = module.exports = mongoose.model('User', userSchema);
//check if i'm already logged
User.findOrCreate({ email: 'blvckish@gmail.com' },
    {
        firstname: "Black",
        lastname: "Power",
        email: "blvckish@gmail.com",
        password: "bl@ckMan123"
    }, function (err, user) { });