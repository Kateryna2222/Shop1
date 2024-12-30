const defaultState = {
    goods: [],
    total: 0,
    modal: false
}

const ADD_TO_BUSKET = "ADD_TO_BUSKET";
const DELETE_FROM_BUSKET = "DELETE_FROM_BUSKET";
const CHANGE_COUNT_ITEM_IN_BUSKET = "CHANGE_COUNT_ITEM_IN_BUSKET";
const TOGGLE_BUSKET = "TOGGLE_BUSKET";

export const busketReducer = (state = defaultState, {type, payload}) => {
    switch(type){
        case ADD_TO_BUSKET:
            const totalAdd = state.total + (payload.count * payload.price)
            return {...state, goods: [...state.goods, payload], total: totalAdd}
        case DELETE_FROM_BUSKET:
            const totalRemove = state.total - (payload.count * payload.price)
            return {...state, goods: state.goods.filter(item => item.id !== payload.id), total: totalRemove}
        case CHANGE_COUNT_ITEM_IN_BUSKET:
            const value = Math.max(1, payload.value);
            const updatedGoods = state.goods.map((item) =>
                item.id === payload.item.id
                    ? { ...item, count: value } 
                    : item 
            );
            const totalUpdate = state.total - (payload.item.count * payload.item.price) + (value * payload.item.price);
            return {...state, goods: updatedGoods,  total: totalUpdate,};
        case TOGGLE_BUSKET:
            return {...state, modal: !state.modal}
        default:
            return state
    }
}


export const addToBusketAction = (payload) => ({type: ADD_TO_BUSKET, payload})
export const removeFromBusketAction = (payload) => ({type: DELETE_FROM_BUSKET, payload})
export const cahngeCountOfItemInBusket = (item, value) => ({type: CHANGE_COUNT_ITEM_IN_BUSKET, payload: { item, value: Number(value) }})
export const toggleModal = () => ({type: TOGGLE_BUSKET})