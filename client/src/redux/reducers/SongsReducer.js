import { songsActions } from '../actions';

const INITIAL_STATE = {
    songs: [],
    isOpenModal: false
}

const SongsReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case songsActions.setSongs:
            return {
                ...state,
                songs: action.payload
            }

        case songsActions.isOpenModal:
            return {
                ...state,
                isOpenModal: action.payload
            }

        case songsActions.isCloseModal:
            return {
                ...state,
                isOpenModal: action.payload
            }
    
        default:
            return state;
    }
}

export default SongsReducer;