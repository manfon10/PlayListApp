import { playListActions } from '../actions';

const INITIAL_STATE = {
    playlists: [],
    songsPlayList: [],
    isOpenModal: false,
    isOpenModalAsign: false
}

const PlayListReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case playListActions.setPlayList:
            return {
                ...state,
                playlists: action.payload
            }
        case playListActions.setSongPlayList:
            return {
                ...state,
                songsPlayList: action.payload
            }

        case playListActions.isOpenModalPlay:
            return {
                ...state,
                isOpenModal: action.payload
            }

        case playListActions.isCloseModalPlay:
            return {
                ...state,
                isOpenModal: action.payload
            }

        case playListActions.isOpenModalPlayAsign:
            return {
                ...state,
                isOpenModalAsign: action.payload
            }

        case playListActions.isCloseModalPlayAsing:
            return {
                ...state,
                isOpenModalAsign: action.payload
            }
    
        default:
            return state;
    }
}

export default PlayListReducer;