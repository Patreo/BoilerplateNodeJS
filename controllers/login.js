var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy
var FACEBOOK_APP_ID = "--insert-facebook-app-id-here--"
var FACEBOOK_APP_SECRET = "--insert-facebook-app-secret-here--";

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    enableProof: false
},
    function (accessToken, refreshToken, profile, done) {
        
    }
));

var login = function (app, db) {
    app.get('/login', passport.authenticate('facebook'), function (req, res) {
        
    });
    
    app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), function (req, res) {
        res.redirect('/');
    });
    
    app.get('/account', ensureAuthenticated, function (req, res) {
        
    });

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
    
    /**
     * Simple route middleware to ensure user is authenticated.
     *  Use this route middleware on any resource that needs to be protected.  If
     *  the request is authenticated (typically via a persistent login session),
     *  the request will proceed.  Otherwise, the user will be redirected to the
     *  login page.
     */
    function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) { return next(); }
        res.redirect('/login')
    }
};

module.exports = login;