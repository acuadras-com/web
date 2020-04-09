const reducer = (state, action) => {
    
    switch (action.type) {
        case 'SAVE_USER':
            return {
                ...state,
                user: action.payload.user,
                shop: action.payload.shop,
                ubication: action.payload.ubication
            }
        default: 
            return state
    }
}

export default reducer;