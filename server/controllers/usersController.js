const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const process = require('dotenv').config();

// Models
const { User } = require('../models/User');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const getInfoUser = catchAsync(async (req, res) => {
    
    const { id, name, email, status } = req.sessionUser;

    const userInfo = { id, name, email, status };

    res.status(200).json({ userInfo });

});

const createUser = catchAsync(async (req, res) => {

    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({ name, email, password: hashPassword });

    newUser.password = undefined;

    res.status(201).json({ newUser });

});

const login = catchAsync(async (req, res, next) => {

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email, status: 'active' } });

    // Compare password with db
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return next(new AppError('Invalid credentials', 400));
    }

    // Generate JWT
    const token = await jwt.sign({ id: user.id }, process.parsed.JWT_SECRET, {
        expiresIn: process.parsed.JWT_EXPIRES_IN,
    });

    user.password = undefined;

    res.status(200).json({ token, user });

});

module.exports = { getInfoUser, createUser, login };