const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Utils
const { catchAsync } = require('../utils/catchAsync');

// Models
const { Song } = require('../models/Song');
const { PlayList } = require('../models/PlayList');
const { SongPlayList } = require('../models/SongPlayList');

const getAllSongs = catchAsync(async (req, res) => {

    const songs = await Song.findAll();

    res.status(200).json({ songs });
    
});

const createSong = catchAsync(async (req, res) => {

    const { name, type } = req.body;

    await Song.create({ name, type });

    res.status(201).json({ status: 'Song create successfully' });

});

const getSongsByPlayList = catchAsync(async (req, res) => {

    const songs = await SongPlayList.findAll({
        include: [
            {
                model: PlayList,
                attributes: ['id', 'name', 'status'],
                where: { status: 'active' }
            },
            {
                model: Song,
                attributes: ['id', 'name', 'type']
            }
        ],
        where: { status: 'active' }
    });

    res.status(200).json({ songs });

});

const filterSong = catchAsync(async (req, res) => {

    const { phrase } = req.query;

    const songs = await Song.findAll({ where: { name: { [Op.like]: `%${phrase}%` } } });

    res.status(200).json({ songs });

});

const addSongToPlayList = catchAsync(async (req, res) => {

    const { idPlayList, idSong } = req.body;

    await SongPlayList.create({ playlistId: idPlayList, songId: idSong });

    res.status(201).json({ status: 'Song add to playlist successfully' });

});

const deleteSongToPlayList = catchAsync(async (req, res) => {

    const { song } = req;

    await SongPlayList.update({ status: 'deleted' }, { where: { songId: song.id,  } });

    res.status(201).json({ status: 'Song delete to playlist successfully' });

});

module.exports = { getAllSongs, createSong, getSongsByPlayList, filterSong, addSongToPlayList, deleteSongToPlayList };