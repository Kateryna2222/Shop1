import "../styles/busket.css"
import closeBtn from "../images/close-bold-svgrepo-com.svg"


import { useDispatch, useSelector } from "react-redux";
import { removeFromBusketAction, cahngeCountOfItemInBusket } from "../store/busketReducer";
import { toggleModal } from "../store/busketReducer";


const Busket = () => {

    const dispatch = useDispatch()
    const goodsInBusket = useSelector(state => state.busketReducer.goods);
    const total = useSelector(state => state.busketReducer.total);
    const isOpen = useSelector(state => state.busketReducer.modal);

    return (
        <>
            {isOpen && (<div className='busket'>
                <div className="busket-overlay">
                    <div className="busket-wrapper">
                        <button onClick={() => dispatch(toggleModal())}  to={"/"} className='buskete-closeBtn'>
                            <img src={closeBtn} alt="close btn" />
                        </button>
                        <h3>BUSKET</h3>
                        {
                            goodsInBusket.length === 0? 
                                <p className="busket-empthy">Your busket is empthy!</p>
                                : (
                                    <div className="busket-inner">
                                        <section class="busket-list-titles">
                                            <h4 class="busket-list-item_title">Item</h4>
                                            <h4 class="busket-list-price_title">Price</h4>
                                            <h4 class="busket-list-description_title">Information</h4>
                                        </section>
                                        <ul class="busket-items">
                                            {
                                                goodsInBusket.map(item => {
                                                    return (<li id={item.id} class="busket-card"> 
                                                        <div class="busket-list-wrapper"> 
                                                            <img class="busket-img" src={item.image}/>
                                                            <p class="busket-title">{item.title}</p>
                                                        </div>
                                                        <div class="busket-price">{item.price}$</div>
                                                        <input onChange={(e) => dispatch(cahngeCountOfItemInBusket(item, e.target.value))} class="busket-count" type="number" min="1" value={item.count}/>
                                                        <button onClick={() => dispatch(removeFromBusketAction(item))} class="busket-btn">delete</button>
                                                    </li>)
                                                })
                                            }
                                        </ul>
                                        <div class="total-price">Total: <span class="generalPrice">{total.toFixed(2)}$</span></div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>)}
        </>
    );
};

export default Busket;