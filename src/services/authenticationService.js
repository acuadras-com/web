import Axios from 'axios';
import {CORE_BASEURL} from '../constants'


const isAppAuthenticated = () => {
    return localStorage.getItem('appUser')? true:false 
}

const getCurrentAppToken = () => {
    return JSON.parse(localStorage.getItem('appUser')).token
}

export const getAppToken = async () => {
    
    var isAuth = isAppAuthenticated()
    if(isAuth)
        isAuth = !isTokenExpired(getCurrentAppToken())

    if(!isAuth)
        await login({
            'username': 'jorge.j4002',
            'password': '123456897',
            'isAppUser': true
        })
    return getCurrentAppToken()
}

export const  login = async (payload) =>{
    const response = await Axios.post(`${CORE_BASEURL}/auth/signin`, payload);
    const signInRespose = response.data
    
    if (response.status === 200) {
            if(payload.isAppUser) {
            localStorage.setItem('appUser', JSON.stringify(signInRespose));
            } else {
            localStorage.setItem('currentUser', JSON.stringify(signInRespose));
            }
    } else {
        throw "Error realizando login"
    }
};

export const logout = () => {
    localStorage.removeItem('currentUser');
}

const isTokenExpired = (token) => {
    
    const decoded = getTokenPayload(token);
    if (decoded.exp < Date.now() / 1000){  // Checking if token is 
        return true;        
    }else {
        return false;
    }
    
}

const getTokenPayload = (token) => {
    return JSON.parse(atob(token.split('.')[1]));
};