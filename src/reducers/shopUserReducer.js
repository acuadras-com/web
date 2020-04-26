import {SAVE_USER, REGISTER_USER, LOADING, ERROR} from '../types/userTypes'

const initialState = {
    "user": {},
    "shop": {},
    "location": {},
    "loading":false,
    "error": '',
    "categories": [
        {
            "id":1,
            "name": 'Fruver',
            "icon": '/img/icono-ensalada.jpg',
            "path":''
        },
        {
            "id":2,
            "name": 'Drogerias',
            "icon": '/img/icono_farmacia.JPG',
            "path":''
        },
        {
            "id":3,
            "name": 'Menu',
            "icon": '/img/icono_cheff.png',
            "path":''
        },
        {
            "id":4,
            "name": 'Carnicería',
            "icon": '/img/icono_cheff.png',
            "path":''
        },
        {
            "id":5,
            "name": 'Ferrreteria',
            "icon": '/img/icono_cheff.png',
            "path":''
        }
    ]
}

export const reducer = (state= initialState, action) => {

    switch (action.type) {
        case SAVE_USER:
            console.log(`ubicacion en  reducer`)
            console.log(action.payload.ubication)
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