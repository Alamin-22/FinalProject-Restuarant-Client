import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout.jsx/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Components/PolpularMenu/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/Menu",
                element: <Menu></Menu>
            },
            {
                path: "/order/:category",
                element: <Order />
            },

        ],

    },
    {
        path: "/login",
        element: <Login></Login>
    }
]);


export default router;