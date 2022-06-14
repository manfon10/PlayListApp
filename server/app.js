const express = require('express');
const cors = require('cors');

// Utils
const { globalErrorHandler } = require('./utils/errors');

// Routers
const { usersRouter } = require('./routes/usersRoutes');
const { playListRouter } = require('./routes/playListRoutes');
const { songRouter } = require('./routes/songRouters');

// Init express app
const app = express();

// Enable cors
app.use(cors());

// Enable incoming JSON data
app.use(express.json());

// Endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/playlist', playListRouter);
app.use('/api/v1/songs', songRouter);

// Global error handler
app.use('*', globalErrorHandler);

module.exports = { app };