import {
    stopSubmit
} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH = 'SET_AUTH';

let initialState = {

    email: null,
    isAuth: false,
    isProcess: false

};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_AUTH:
            return {
                ...state,
                ...action.payload,

            }

            default:
                return state;
    }
}

export const setAuthUserData = (email, isProcess) => ({
    type: SET_USER_DATA,
    payload: {
        email,
        isProcess
    }
})
export const setAuth = (isAuth) => ({
    type: SET_AUTH,
    payload: {
        isAuth
    }
})


export const login = (email, password) => (dispatch) => {
    if (email === 'kode@kode.ru' && password === 'Enk0deng') {
        dispatch(setAuthUserData(email, true));
    } else {
        dispatch(stopSubmit("login", {
            _error: "Incorrect email or password"
        }));
    }
}

export const confirmSms=(sms)=>(dispatch)=>{
if(sms==='12345678'){
    dispatch(setAuth(true));
}else {
    dispatch(stopSubmit("login", {
        _error: "Incorrect sms"
    }));
}
}
export const logout  = () => (dispatch) =>{
    dispatch(setAuthUserData(null,false));
    dispatch(setAuth(false));
}

export default authReducer;