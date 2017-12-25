var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('../models/User');
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use('UserLogin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
}, function (req, email, password, done) {
    User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
            return done(null, false, { message: 'Incorrect User.' });
        } else {
            user.comparePassword(password, function (err, isMatch) {
                if (err) {
                    return done(err);
                } else if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Invalid password' });
                }
            });
        }
    });
}));


module.exports = passport;