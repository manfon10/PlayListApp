import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import SongsReducer from './SongsReducer';
import PlayListReducer from './PlayListReducer';

const rootReducer = combineReducers({
    user: LoginReducer,
    songs: SongsReducer,
    playlists: PlayListReducer
});

export default rootReducer;