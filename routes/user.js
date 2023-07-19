const express = require('express')
const router = express.Router();
const {
    getUsers,
    createUser,
    deleteUsers,
    getUser,
    putUser,
    deleteUser
} = require('../controllers/userController.js')

// root endpoint
router.route('/')
    .get(getUsers)
    .post(createUser)
    .delete(deleteUsers)
    
router.route('/:userId')
    .get(getUser)
    .put(putUser)
    .delete(deleteUser)

module.exports = router;