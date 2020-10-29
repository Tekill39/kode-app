import {authApi} from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
        
        email:'kode@kode.ru',
        login:'Enk0deng',
        isAuth:false
        
};
 const authReducer = (state= initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.payload,
                                       
            }
       
        default:
            return state;
    }
}

export const setAuthUserData  = (email,login,isAuth) => ({type: SET_USER_DATA,payload:{email,login,isAuth}})

export const getAuthUserData  = () => (dispatch)=> {
    authApi.me()
    .then(response => {
        if (response.data.resultCode === 0) {
            let {login,email}=response.data.data;
            dispatch(setAuthUserData(email,login,true));
        }
    });
}

export const login  = (email, password) => (dispatch) =>{
    
   
    authApi.login(email, password)
    .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        }
        else{
            let message = response.data.messages.length > 0 ? response.data.message[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message}));
        }
    });
}
// export const logout  = () => (dispatch) =>{
//     authApi.logout()
//     .then(response => {
//         if (response.data.resultCode === 0) {
//             dispatch(setAuthUserData(null,null, null, false));
//         }
//     });
// }

export default authReducer;