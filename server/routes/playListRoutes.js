const express = require('express');

// Middlewares
const { protectToken } = require('../middlewares/userMiddleware');
const { playListExist } = require('../middlewares/playListMiddleware');

// Controller

const { getAllPlayList, createPlayList, deletePlayList } = require('../controllers/playListController');

const router = express.Router();

// Routes protected

router.use(protectToken);

router.get('/', getAllPlayList);

router.post('/add-playlist', createPlayList);

router.delete('/:id', playListExist, deletePlayList);

module.exports = { playListRouter: router };