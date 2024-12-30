import Loader from "../components/Loader";
import ErrorPage from "../pages/ErrorPage";
import Rate from "../components/Rate";
import AddBusketBtn from "../components/AddBusketBtn";

import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentGoodAction, addGoodsAction } from "../store/goodsReducer";
import {getGoods} from "../API/getGoods"

const GoodPage = () => {
    const {id: goodsId} = useParams();
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const currentGood = useSelector((state) => state.goodsReducer.currentGood);
    const goods = useSelector((state) => state.goodsReducer.goods);

    useEffect(() => {
        const fetchData = async () => {
            if (goods.length === 0) {
                const data = await getGoods();
                dispatch(addGoodsAction(data)); 
            }
            dispatch(updateCurrentGoodAction(goodsId));
            setLoading(false);
        };
        fetchData();
    }, [dispatch, goods, goodsId]);




    return (
        loading ? (
            <Loader/>
        ) : (
            currentGood? 
                (<div className="goodPage">
                    <div className="good-top">
                        <img className="good-img" src={currentGood.image} alt={currentGood.title} />
                        <div className="good-info">
                            <h3 className="good-name">{currentGood.title}</h3>
                            <Rate className="good-rating" rate={currentGood.rating.rate}></Rate>
                            <p className="good-price">{currentGood.price}$</p>
                            <AddBusketBtn element={currentGood}/>
                        </div>
                    </div>
                    <p className="good-description">{currentGood.description}</p>
                </div>) : 
                (<ErrorPage/>)
        )
    );
    
}

export default GoodPage;





