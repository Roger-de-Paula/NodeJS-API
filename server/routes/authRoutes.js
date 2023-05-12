const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

// User registration
router.post('/register', userController.registerUser);

// User login
router.post('/login', authController.login);

module.exports = router;
