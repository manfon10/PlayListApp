const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const SongPlayList = db.define('songs_playlists', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  songId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'active',
  }
});

module.exports = { SongPlayList };