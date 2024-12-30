import { addToBusketAction } from "../store/busketReducer";
import { useDispatch, useSelector } from "react-redux";

const AddBusketBtn = ({element}) => {

    const dispatch = useDispatch()
    const goodsInBusket = useSelector(state => state.busketReducer.goods);

    return (
        goodsInBusket.some(item => item.id === element.id)? 
            <button className="card-btn disable" disabled={true}>in busket</button> :
            <button onClick={() => dispatch(addToBusketAction({...element, count: 1}))} className="card-btn">add to busket</button>
    );
};

export default AddBusketBtn;
