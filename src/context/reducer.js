export const actionType = {
    SET_USER : 'SET_USER',
    SET_FARM_ITEMS  : 'SET_FARM_ITEMS',
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

            default:
                return state;
    }
};

export default reducer;