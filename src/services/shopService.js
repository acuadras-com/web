import axios from 'axios';
import {GET_SHOP_BY_GEO_NEAR_URL, GET_ALL_SHOP, GET_SHOP_BY_GEO_NEAR_AND_CATEGROY_URL, GET_SHOP_BY_CATEGROY_URL} from '../constants'
import { getAppToken }  from './authenticationService';

export const getShops = async (ubication, category) => {
    
    const token = await getAppToken()
    const headers = {'Authorization': `Bearer ${token}`}
    
    const instance = axios.create({
        timeout: 3000,
        headers: headers
        });
    var response = {}
    
    var point = {}
    if(ubication) {
        point = {"x": ubication.latitude, "y" : ubication.longitude}
    }
    if(ubication && category) {
            const data = {point,  categories: [category]}
            response = await instance.post(GET_SHOP_BY_GEO_NEAR_AND_CATEGROY_URL, data);
    } else if(ubication) {
            response = await instance.post(GET_SHOP_BY_GEO_NEAR_URL, point);
    } else if(category) {
        console.log('cat ' +category)
        const data = {"values": [category]}
        response = await instance.post(GET_SHOP_BY_CATEGROY_URL, data);
    } else {
        response = await instance.get(GET_ALL_SHOP);
    }
    return response.data
    
};