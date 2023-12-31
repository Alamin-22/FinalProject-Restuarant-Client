import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FiShoppingCart } from "react-icons/fi";
import useCart from "../Hooks/useCart";


const Navbar = () => {

    const { user, logout } = useAuth();
    const [cart] = useCart();

    const navlinks = <>
        <li><NavLink to={"/"}> Home</NavLink></li>
        <li><NavLink to={"/Menu"}> Menu</NavLink></li>
        <li><NavLink to={"/order/salad"}>Order Food</NavLink></li>
        <li>
            <Link to={"/dashboard/cart"}>
                <button className="btn btn-sm mr-4">
                    <FiShoppingCart />
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>
    </>

    const handleLogOut = () => {
        logout()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 text-white max-w-screen-xl bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <Link to={"/login"} className="btn">Login</Link> */}
                    {
                        user ? <>
                            {/* <span>{user?.displayName}</span> */}
                            <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                        </> : <>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;