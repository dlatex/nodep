var mongoose = require('mongoose');
var validators = require('mongoose-vaidators');
var bcrypt = require('bcrypt');
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
})
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
var User = module.exports = mongoose.model('User', userSchema);