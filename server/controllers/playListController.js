// Utils
const { catchAsync } = require('../utils/catchAsync');

// Models
const { PlayList } = require('../models/PlayList');

const getAllPlayList = catchAsync(async (req, res) => {

    const { sessionUser } = req;

    const playlists = await PlayList.findAll({ where: { userId: sessionUser.id } });

    res.status(200).json({ playlists });

});

const createPlayList = catchAsync(async (req, res) => {

    const { name, idUser } = req.body;

    await PlayList.create({ name, userId: idUser });

    res.status(201).json({ status: 'Playlist created successfully'});

});

const deletePlayList = catchAsync(async (req, res) => {

    const { playlist } = req;

    await playlist.update({ status: 'deleted' });

    res.status(201).json({ status: 'Playlist delete successfully'});

});

module.exports = { getAllPlayList, createPlayList, deletePlayList };