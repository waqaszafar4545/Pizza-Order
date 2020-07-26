import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    console.log('action');
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};
export const userOrders = (userOrders) => {
    return {
        type: actionTypes.USER_ORDERS,
        userOrders: userOrders
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    let url = 'api/logout';
    axios.post(url)
        .then(response => {
            localStorage.removeItem('token');
            localStorage.removeItem('expirationDate');
            localStorage.removeItem('userId');
        })
        .catch(err => {
            dispatch(authFail(err.response.data.error));
        });
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};
export const fetchUserOrders = () => {
    let url = 'api/user';
    axios.post(url)
        .then(response => {
            console.log("Hello Fetch User Orders", response);
            dispatch(userOrders(response));
        })
        .catch(err => {
            dispatch(authFail(err.response.data.error));
        });
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'api/test_user';
        if (!isSignup) {
            url = 'api/login';
        }
        axios.get('/sanctum/csrf-cookie')
            .then(response => {
                console.log(response, "sanctumUrl");
                axios.post(url, authData)
                    .then(response => {
                        const expiresIn = response.data.expiresIn ? response.data.expiresIn : 3600;
                        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
                        localStorage.setItem('token', response.data.idToken);
                        localStorage.setItem('expirationDate', expirationDate);
                        localStorage.setItem('userId', response.data.localId);
                        dispatch(authSuccess(response.data.idToken, response.data.localId));
                        dispatch(checkAuthTimeout(response.data.expiresIn));
                    })
                    .catch(err => {
                        dispatch(authFail(err.response.data.error));
                    });
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
};

export const setAuthRedirectPath = (path) => {
    console.log("set this auth path", path);
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    };
};
