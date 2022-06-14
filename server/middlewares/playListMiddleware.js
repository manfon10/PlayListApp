// Models
const { PlayList } = require('../models/PlayList');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const playListExist = catchAsync(async (req, res, next) => {

    const { id } = req.params;

    const playlist = await PlayList.findOne({ where: { id, status: 'active' } });

    if(!playlist) {
        return next(new AppError('The playlist does not exist given Id', 404));
    }

    req.playlist = playlist;

    next();

});

module.exports = { playListExist };