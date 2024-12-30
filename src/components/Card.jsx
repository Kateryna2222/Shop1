import { Link } from "react-router-dom";
import AddBusketBtn from "./AddBusketBtn";


const Card = ({item}) => {

    return (
        <>
            <img className="card-img" src={item.image}/>
            <h3 className="card-name">{item.title}</h3>
            <p className="card-price">{item.price}$</p>
            <AddBusketBtn element={item}/>
            <Link className="card-more_link" to={`/goods/${item.id}`}>more</Link>
        </>
    )
}

export default Card;

