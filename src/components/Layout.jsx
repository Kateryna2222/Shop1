import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Busket from "./Busket";

const Layout = () => {

    return (
        <>
            <Busket/>
            <Header className="wrapper"/>
            <main className="wrapper">
                <Outlet/>
            </main>
            <Footer className="wrapper"/>
        </>
    )
}

export default Layout;