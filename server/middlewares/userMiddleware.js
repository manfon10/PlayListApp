const jwt = require('jsonwebtoken');
const process = require('dotenv').config();

// Models
const { User } = require('../models/User');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const protectToken = catchAsync(async (req, res, next) => {
  
    let token;
  
    // Extract token from headers
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }
  
    if (!token) {
      return next(new AppError('Session invalid', 403));
    }
  
    // Validate token
    const decoded = await jwt.verify(token, process.parsed.JWT_SECRET);
    
    const user = await User.findOne({ where: { id: decoded.id, status: 'active' } });
  
    if (!user) {
      return next(
        new AppError('The owner of this token is no longer available', 403)
      );
    }
  
    req.sessionUser = user;
  
    next();
  
});

module.exports = { protectToken };