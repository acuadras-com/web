import {SELECT_CATEGORY} from '../types/shopTypes'


export const selectedCategory =(payload) => (
    {
        type: SELECT_CATEGORY,
        payload
    }   
)