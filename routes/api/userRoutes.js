const router = require('express').Router();
const {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    getUserById,
    addFriend
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser)

router.route('/:userId').delete(deleteUser).put(updateUser).get(getUserById);

router.route('/:userId/friends/:friendId').post(addFriend)

module.exports = router; 