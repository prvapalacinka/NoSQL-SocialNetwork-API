const { User } = require("../models")

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
        User.findByIdAndDelete(req.params.userId)
            .then(response => {
                res.json(response);
            })
    },
    updateUser(req, res) {
        User.findByIdAndUpdate(req.params.userId,
            {
                $set: req.body
            },
            {
                new: true
            }
        )
            .then((user) => res.json(updateUser));
    },
    getUserById(req, res) {
        User.findById(req.params.userId)
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    addFriend(req, res) {
        User.findByIdAndUpdate(req.params.userId,
            {
                $addToSet: { friends: req.params.friendId }
            },
            {
                new: true
            }
        ).then(result => {
            res.json(result)
        })
    },
    deleteFriend(req, res) {
        User.findByIdAndDelete(req.params.userId,
            {
                $pull: { friends: req.params.friendId }
            },
            {
                new: true
            }
        ).then(result => {
            res.json(result)
        })
    },
};