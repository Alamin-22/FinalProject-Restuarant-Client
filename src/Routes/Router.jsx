import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout.jsx/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Dashboard from "../Layout.jsx/Dashboard";
import Cart from "../DashBoard/Cart/Cart";
import PrivateRoute from "../Private/PrivateRoute";
import AllUsers from "../DashBoard/Cart/AllUsers/AllUsers";
import AddItems from "../Pages/AddItems/AddItems";
import AdminRoute from "../Private/AdminRoute";
import ManageItems from "../Pages/ManageItems/ManageItems";
import UpdateItem from "../DashBoard/Update/UpdateItem";


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
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "cart",
                element: <Cart></Cart>
            },
            // admin routes
            {
                path: "users",
                element: <AdminRoute><AllUsers /></AdminRoute>,
            },
            {
                path: "addItems",
                element: <AdminRoute><AddItems /></AdminRoute>
            },
            {
                path: "manageItems",
                element: <AdminRoute><ManageItems /></AdminRoute>,
            },
            {
                path: "updateItem/:id",
                element: <AdminRoute><UpdateItem /></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`),
            }
        ]
    }
]);


export default router;