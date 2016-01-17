var User = function (db) {
    var User = db.model('User', db.Schema({
        name: String,
        email: String,
        password: String
    }));

    return User;
}

module.exports = User;