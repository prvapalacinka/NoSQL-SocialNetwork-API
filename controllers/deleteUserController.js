const {User} = require("../models")

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res) {
        User.findByIdAndDelete(req.params.userId);
        res.json("user deleted");
    }
};