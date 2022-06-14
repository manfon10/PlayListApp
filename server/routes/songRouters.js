const express = require('express');

// Middlewares
const { protectToken } = require('../middlewares/userMiddleware');
const { songExist } = require('../middlewares/songMiddleware');

// Controller
const { getAllSongs, createSong, getSongsByPlayList, filterSong, addSongToPlayList, deleteSongToPlayList } = require('../controllers/songController');

const router = express.Router();

// Routes protected

router.use(protectToken);

router.get('/filter', filterSong);

router.get('/get_song_playlist', getSongsByPlayList);

router.get('/', getAllSongs);

router.post('/add_song', createSong);

router.post('/add_song_playlist', addSongToPlayList);

router.delete('/:id', songExist, deleteSongToPlayList);

module.exports = { songRouter: router };