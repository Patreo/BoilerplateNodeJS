var index = function (app, db) {    
    var User = require('../models/user.js')(db);

    app.get('/', function (req, res) {
        res.render('index', {
            title: 'Hello World!!!'
        });
    });

    app.post('/', function (req, res) {
        var user = new User({
            name: 'Zildjian', 
            email: req.body.email, 
            password: req.body.password
        });
        
        user.save(function (err) {
            if (err)
                console.log(err);
        });

        res.render('index', {
            title: 'Hello World!!!'
        });
    });
};

module.exports = index;