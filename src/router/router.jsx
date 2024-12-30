import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import MainPage from "../pages/MainPage";
import GoodsPage from "../pages/GoodsPage";
import GoodPage from "../pages/GoodPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <MainPage/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/goods",
                element: <GoodsPage/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/goods/:id",
                element: <GoodPage/>,
                errorElement: <ErrorPage/>
            },
        ]
    }
])

export default router;