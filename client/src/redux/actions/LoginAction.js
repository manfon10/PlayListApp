import axios from 'axios';
import history from '../../utils/history';
import GetConfig from '../../utils/GetConfig';

export const loginActions = {
    setUserInfo: "LOGIN_USER",
    setUserError: "LOGIN_ERROR",
    setUserSignUp: "SIGN_UP"
}

export const setUserInfo = userInfo => ({
    type: loginActions.setUserInfo,
    payload: userInfo
});

export const setError = error => ({
    type: loginActions.setUserError,
    payload: error
});

export const setSignUp = (message) => ({
    type: loginActions.setUserSignUp,
    payload: message
});

export const loginThunk = data => {
    return dispatch => {
        axios
            .post('http://localhost:2920/api/v1/users/login', data)
            .then( res => {
                dispatch(setUserInfo(res.data.user));
                localStorage.setItem('tokenUser', res.data.token);
                history.replace("/");
            })
            .catch(err => {
                dispatch(setError(err.response.data.message));
                setTimeout(() => {
                    dispatch(setError(""));
                }, 4000);
            });
    };
};

export const signupThunk = data => {
    return dispatch => {
        axios
            .post('http://localhost:2920/api/v1/users/signup', data)
            .then( res => {
                dispatch(setSignUp(res.data.message));
                history.replace("/login");
                setTimeout(() => {
                    dispatch(setSignUp(""));
                }, 4000);
            })
            .catch(err => dispatch(setError(err.response.data.message)));
    };
};

export const getInfoUser = () => {
    return dispatch => {
        axios
            .post('http://localhost:2920/api/v1/users/get_info_user', {} , GetConfig())
            .then(res => dispatch(setUserInfo(res.data.userInfo)))
            .catch(err => dispatch(setError(err.response.data.message)));
    };
};