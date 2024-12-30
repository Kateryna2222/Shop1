import { Link } from "react-router-dom";

const MainPage = () => {

    return (
        <div className="mainPage">
            <h1 className="mainPage-title">WELCOME TO OUR SHOP</h1>
            <Link to={"/goods"} className="mainPage-link">click to watch ours goods</Link>
        </div>
    )
}

export default MainPage;