const router = require('express').Router();

const {
    getThoughts,
    createThoughts,
} = require('../../controllers/userController');

router.route('/').get(getThoughts).post(createThoughts);

module.exports = router;


