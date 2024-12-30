import star from "../images/star.svg"
import starFilled from "../images/starFilled.svg"

const Rate = ({rate}) => {

    return (
        <div className="rate">
            <ul className="stars">
                {[...Array(5)].map((item, index)=> {
                    return (
                        <li key={index} className="star">
                            <img src={Math.round(rate) < (index + 1) ? star : starFilled}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Rate;