export const actionType = {
    SET_USER : 'SET_USER',
    SET_FARM_ITEMS  : 'SET_FARM_ITEMS',
    SET_CART_SHOW : 'SET_CART_SHOW',
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user,
            };
            
            case actionType.SET_FARM_ITEMS :
                return {
                    ...state,
                    farmItems: action.farmItems,
                };

            case actionType.SET_CART_SHOW :
                return {
                    ...state,
                    cartShow: action.cartShow,
                };

            default:
                return state;
    }
};

export default reducer;