import {SELECT_CATEGORY, LOADING, ERROR} from '../types/shopTypes'

const initialState = {
    "selectedShop": {},
}

export const shopsListReducer = (state=initialState, action) => {

    switch (action.type) {
        case SELECT_CATEGORY:
            console.log('seleccionado categoria')
            return  {
                ...state,
                selectedCategory: action.payload,
            }
        case LOADING:
                return {...state, loading : true};
        case ERROR:
            return {...state, loading : false, error:action.payload};
        default: 
            return state
    }
}