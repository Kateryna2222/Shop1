import { NavLink } from "react-router-dom";
import busketIcon from "../images/shopping-cart-svgrepo-com.svg"

import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../store/busketReducer";


const Header = () => {

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.busketReducer.modal);

    return (
        <div className="header">
            <div className="header-wrapper">
                <NavLink to={"/"} className="home-link">HOME</NavLink>
                <button onClick={() => dispatch(toggleModal())} className="busket-open"><img src={busketIcon} alt="bucket"/></button>
            </div>
        </div>
    )
}

export default Header;