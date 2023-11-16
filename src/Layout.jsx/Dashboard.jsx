import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaSearch, FaShopify } from "react-icons/fa";
import { SiBookmyshow, SiGooglemessages } from "react-icons/si";

import { MdCalendarMonth, MdPayment } from "react-icons/md";
import useCart from "../Hooks/useCart";
const Dashboard = () => {
    const [cart] = useCart()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li>

                        <NavLink to={"/dashboard/userHome"} > <FaHome />User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/reservation"} > <MdCalendarMonth />reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/payment_history"} > <MdPayment />payment history</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/addReview"} > <SiGooglemessages />add review</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/myBooking"} > <SiBookmyshow />my booking</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/cart"} > <FaShopify />My Cart ({cart.length})</NavLink>
                    </li>
                    <div className="divider">Or</div>
                    <li>
                        <NavLink to={"/"} > <FaHome />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/order/salad"} > <FaSearch />Menu</NavLink>
                    </li>
                </ul>
            </div>
            <div className=" flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;