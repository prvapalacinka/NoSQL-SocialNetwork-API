const router = require('express').Router();

const {
    getThoughts,
    createThoughts,
} = require('../../controllers/thoughtController');

// router.route('/').get(getThoughts).post(createThoughts);

// router.route('/:userId').get(getSingleUser);

module.exports = router;

