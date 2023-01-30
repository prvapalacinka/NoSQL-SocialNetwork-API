const router = require('express').Router();

const {
    getThoughts,
    createThoughts,
    deleteThought,
    updateThought,
    getThoughtById
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThoughts);

router.route('/:userId').delete(deleteThought).put(updateThought).get(getThoughtById);

module.exports = router;

