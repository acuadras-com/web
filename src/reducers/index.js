const reducer = (state, action) => {
    
    switch (action.type) {
        case 'SAVE_USER':
            console.log(action.payload);
            return {
                ...state,
                user: action.payload,
            }
        default: 
            return state
    }
}

export default reducer;