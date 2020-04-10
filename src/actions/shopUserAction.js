import Axios from 'axios';
import {SAVE_USER, REGISTER_USER, LOADING, ERROR} from '../types/userTypes'

const coreBaseUrl = 'http://localhost:9072/tutendero';
const generalError = 'Error General, por favor comuniquese con el administrador o vuelva a intentarlo mas tarde';

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
        console.log('Enviando ...')
        const responseS = await Axios.post(`${coreBaseUrl}/shop`, payload.shop);
        payload.shop = responseS.data;
        payload.user.shopsIds = [responseS.data.id];
        const responseU = await Axios.post(`${coreBaseUrl}/user`, payload.user);
        payload.user = responseU.data;
        console.log("Respuesta usuario " + responseU.data);
        
        if (responseU.status === 200) {
             dispatch({type: REGISTER_USER, payload})
        } else {
            dispatch({type: ERROR, payload: generalError })
        }
    } catch (error) {
        dispatch({type: ERROR, payload: generalError})
    }
};