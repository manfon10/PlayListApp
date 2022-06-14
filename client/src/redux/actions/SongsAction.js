import axios from 'axios';
import GetConfig from '../../utils/GetConfig';

export const songsActions = {
    setSongs: "GET_SONGS",
    isOpenModal: "OPEN_MODAL_SONG",
    isCloseModal: "CLOSE_MODAL_SONG",
    createSong: "CREATE_SONG",
    filterSong: "FILTER_SONG"
};

export const setSongs = songs => ({
    type: songsActions.setSongs,
    payload: songs
});

export const setIsOpenModal = (isOpen, modal) => ({
    type: songsActions.isOpenModal,
    payload: isOpen
});

export const setIsCloseModal = (isClose) => ({
    type: songsActions.isCloseModal,
    payload: isClose
});

export const createSong = () => ({
    type: songsActions.createSong
});

export const filterSong = () => ({
    type: songsActions.filterSong
});

export const getSongsThunk = () => {
    return dispatch => {
        axios
            .get('http://localhost:2920/api/v1/songs', GetConfig())
            .then( res => dispatch(setSongs(res.data.songs)));
    };
};

export const createSongThunk = data => {
    return dispatch => {
        axios
            .post('http://localhost:2920/api/v1/songs/add_song', data, GetConfig())
            .then( res => {
                dispatch(createSong());
            });
    };
};

export const filterSongThunk = (phrase) => {
    return dispatch => {
        axios
            .get(`http://localhost:2920/api/v1/songs/filter?phrase=${phrase}`, GetConfig())
            .then( res => {
                dispatch(filterSong());
                dispatch(setSongs(res.data.songs))
            });
    };
};