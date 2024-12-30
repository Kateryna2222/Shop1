import Card from "../components/Card";
import Loader from "../components/Loader";

import { useState, useEffect } from "react";
import {getGoods} from "../API/getGoods";

import { useDispatch, useSelector } from "react-redux";
import { addGoodsAction } from "../store/goodsReducer";


const GoodsPage = () => {
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch();
    const goods = useSelector((state) => state.goodsReducer.goods);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getGoods();
            dispatch(addGoodsAction(data)); 
            setLoading(false);
        };
        fetchData();
    }, [dispatch]);

    
    return (
        loading?
                (
                    <Loader/>
                ) 
                : (<div className="goodsPage">
                    <ul className="cards">
                        {goods.map(item => {
                            return (
                                <li key={item.id} className="card">
                                    <Card item={item}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
        ) 
    )
}

export default GoodsPage;