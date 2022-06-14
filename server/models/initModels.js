const { PlayList } = require('./PlayList');
const { SongPlayList } = require('./SongPlayList');
const { Song } = require('./Song');
const { User } = require('./User');

const initModels = () => {

    User.hasMany(PlayList);
    PlayList.belongsTo(User);

    PlayList.hasMany(SongPlayList);
    SongPlayList.belongsTo(PlayList);

    Song.hasMany(SongPlayList);
    SongPlayList.belongsTo(Song);

}

module.exports = { initModels };