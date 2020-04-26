export const CORE_BASEURL = 'http://localhost:9072/tutendero';
const RADIUD = 100
export const GET_SHOP_BY_GEO_NEAR_URL = `${CORE_BASEURL}/shop/geo/near/${RADIUD}`;
export const GET_SHOP_BY_GEO_NEAR_AND_CATEGROY_URL = `${CORE_BASEURL}/shop/geo/near/${RADIUD}/categories`;
export const GET_SHOP_BY_CATEGROY_URL = `${CORE_BASEURL}/shop/categories`;
export const GET_ALL_SHOP = `${CORE_BASEURL}/shop`;
export const GENERAL_ERROR = 'Error General, por favor comuniquese con el administrador o vuelva a intentarlo mas tarde';