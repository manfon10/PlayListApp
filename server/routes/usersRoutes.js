const express = require('express');

// Middlewares
const { protectToken } = require('../middlewares/userMiddleware');

// Controller
const { getInfoUser, createUser, login } = require('../controllers/usersController');

const router = express.Router();

// Routes free

router.post('/signup', createUser);

router.post('/login', login);

// Routes protected

router.use(protectToken);

router.post('/get_info_user', getInfoUser);

module.exports = { usersRouter: router };