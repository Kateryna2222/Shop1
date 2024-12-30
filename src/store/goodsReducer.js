
const defaultState = {
    goods: [],
    currentGood: {}
};

const ADD_GOODS = "ADD_GOODS";
const UPDATE_CURRENT_GOOD = "UPDATE_CURRENT_GOOD";

export const goodsReducer = (state = defaultState, {type,payload}) => {
    switch(type){
        case ADD_GOODS:
            return {...state, goods: payload}
        case UPDATE_CURRENT_GOOD:
            return {...state, currentGood: state.goods.find(good => good.id.toString() === payload)}
        default:
            return state
    }
}


export const addGoodsAction = (payload) => ({type: ADD_GOODS, payload});
export const updateCurrentGoodAction = (payload) => ({type: UPDATE_CURRENT_GOOD, payload});
