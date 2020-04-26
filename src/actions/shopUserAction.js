import Axios from 'axios';
import {SAVE_USER, REGISTER_USER, LOADING, ERROR} from '../types/userTypes'
import {CORE_BASEURL, GENERAL_ERROR} from '../constants'

export const saveUserToState =(payload) => (
    {
        type: SAVE_USER,
        payload
    }   
)

export const registerUser = (payload) => async (dispatch) => {
    
    dispatch ({
        type: LOADING
    })
    try {
        
        const responseS = await Axios.post(`${CORE_BASEURL}/shop`, payload.shop);
        payload.shop = responseS.data;
        payload.user.shopsIds = [responseS.data.id];
        const responseU = await Axios.post(`${CORE_BASEURL}/user`, payload.user);
        payload.user = responseU.data;
        
        if (responseU.status === 200) {
             dispatch({type: REGISTER_USER, payload})
        } else {
            dispatch({type: ERROR, payload: GENERAL_ERROR })
        }
    } catch (error) {
        dispatch({type: ERROR, payload: GENERAL_ERROR})
    }
};