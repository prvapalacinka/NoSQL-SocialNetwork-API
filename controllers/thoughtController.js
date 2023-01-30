const {User} = require("../models")

module.exports = {
    getThoughts(req, res) {
        User.find()
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
    createThoughts(req, res) {
        Thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res) {
        Thought.findByIdAndDelete(req.params.thoughtId)
            .then(response => {
                res.json(response);
            })
    },
    updateThought(req, res) {
        Thought.findByIdAndUpdate(req.params.thoughtId,
            {
                $set: req.body
            },
            {
                new: true
            }
        )
            .then((thought) => res.json(updateThought));
    },
    getThoughtById(req, res) {
        Thought.findById(req.params.thoughtId)
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
};

