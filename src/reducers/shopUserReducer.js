import {SAVE_USER, REGISTER_USER, LOADING, ERROR} from '../types/userTypes'

const reducer = (state, action) => {

    switch (action.type) {
        case SAVE_USER:
            return  {
                ...state,
                user: action.payload.user,
                shop: action.payload.shop,
                ubication: action.payload.ubication,
            }
        case REGISTER_USER:
            return {
                ...state,
                user: action.payload.user,
                shop: action.payload.shop,
                loading: false,
                error:'OK'
            }
        case LOADING:
                return {...state, loading : true};
        case ERROR:
            return {...state, loading : false, error:action.payload};
        default: 
            return state
    }
}

export default reducer;