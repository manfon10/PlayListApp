import axios from 'axios';
import GetConfig from '../../utils/GetConfig';

export const playListActions = {
    setPlayList: "GET_PLAYLIST",
    isOpenModalPlay: "OPEN_MODAL_PLAYLIST",
    isCloseModalPlay: "CLOSE_MODAL_PLAYLIST",
    setSongPlayList: "GET_SONGS_PLATLIST",
    createPlayList: "CREATE_PLAYLIST",
    isOpenModalPlayAsign: "OPEN_MODAL_PLAYLIST_ASIGN",
    isCloseModalPlayAsing: "CLOSE_MODAL_PLAYLIST_ASIGN",
    asignSongToPlayList: "ASIGN_SONG_PLAYLIST",
    deleteSongToPlayList: "DELETE_SONG_PLAYLIST"
};

export const setIsOpenModalPlay = (isOpen) => ({
    type: playListActions.isOpenModalPlay,
    payload: isOpen
});

export const setIsCloseModalPlay = (isClose) => ({
    type: playListActions.isCloseModalPlay,
    payload: isClose
});

export const setIsOpenModalPlayAsing = (isOpen) => ({
    type: playListActions.isOpenModalPlayAsign,
    payload: isOpen
});

export const setIsCloseModalPlayAsing = (isClose) => ({
    type: playListActions.isCloseModalPlayAsing,
    payload: isClose
});

export const setPlaylists = playlists => ({
    type: playListActions.setPlayList,
    payload: playlists
});

export const setSongPlayList = songs => ({
    type: playListActions.setSongPlayList,
    payload: songs
});

export const createPlayList = () => ({
    type: playListActions.createPlayList,
});

export const asignSogn = () => ({
    type: playListActions.asignSongToPlayList,
});

export const deleteSong = () => ({
    type: playListActions.deleteSongToPlayList,
});

export const getPlayListThunk = () => {
    return dispatch => {
        axios
            .get('http://localhost:2920/api/v1/playlist', GetConfig())
            .then( res => dispatch(setPlaylists(res.data.playlists)));
    };
};

export const getSongPlayListThunk = () => {
    return dispatch => {
        axios
            .get('http://localhost:2920/api/v1/songs/get_song_playlist', GetConfig())
            .then( res => dispatch(setSongPlayList(res.data.songs)));
    };
};

export const createPlayListThunk = data => {
    return dispatch => {
        axios
            .post('http://localhost:2920/api/v1/playlist/add-playlist', data, GetConfig())
            .then( res => {
                dispatch(createPlayList());
            });
    };
};

export const addSognPlayListThunk = data => {
    return dispatch => {
        axios
            .post('http://localhost:2920/api/v1/songs/add_song_playlist', data, GetConfig())
            .then( res => {
                dispatch(asignSogn());
                dispatch(getSongPlayListThunk());
            });
    };
};

export const deleteSongPlayList = idSong => {
    return dispatch => {
        axios
            .delete(`http://localhost:2920/api/v1/songs/${idSong}`, GetConfig())
            .then( res => {
                dispatch(deleteSong());
                dispatch(getSongPlayListThunk());
            });
    };
};