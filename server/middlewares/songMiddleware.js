// Models
const { Song } = require('../models/Song');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const songExist = catchAsync(async (req, res, next) => {

    const { id } = req.params;

    const song = await Song.findOne({ where: { id }});

    if(!song) {
        return next(new AppError('The song does not exist given Id', 404));
    }

    req.song = song;

    next();

});

module.exports = { songExist };