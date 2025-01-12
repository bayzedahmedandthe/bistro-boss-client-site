import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaUserAlt } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { MdLogin, MdLogout } from "react-icons/md";
import useCart from "../Hooks/useCart";
import { toast } from "react-toastify";

const Navbar = () => {
    const [cart] = useCart();
    const { user, logOut } = useContext(AuthContext);
    // console.log(user?.photoURL);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "LogOut Successful",
                    showConfirmButton: false,
                    timer: 2000
                });
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleDeshBoard = () => {
        if (!user) {
            return toast.error("You are not logged In. Please LogIn Now");

        }
    }
    const handleCart = () => {
        if(!user){
            return toast.error("You are not logged In. Please LogIn Now");
        }
    }
    return (
        <div className="navbar text-white bg-opacity-40 backdrop-blur-sm fixed z-20 bg-slate-700">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow bg-yellow-700">
                        <li className="text-xl font-semibold pr-6">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="text-xl font-semibold pr-6">
                            <button onClick={handleDeshBoard}><NavLink to="/deshboard/userHome" >Deshboard</NavLink></button>
                        </li>
                        <li className="text-xl font-semibold ">
                            <NavLink to="ourmenu" >Our Menu</NavLink>
                        </li>
                        <li className="text-xl font-semibold">
                            <NavLink to="/orderfood/salad">Order Food</NavLink>
                        </li>
                        <li>
                            <button onClick={handleCart}>
                                <Link to="/deshboard/mycart">
                                    <div className="pl-4 relative">
                                        <span className="text-4xl"><BsCart3 /></span>
                                        <p className="bg-[#EEFF25] text-center text-black rounded-full absolute top-4 -right-5 px-2">+{cart.length}</p>
                                    </div>
                                </Link>
                            </button>
                        </li>
                        <li className="text-xl font-semibold">
                            <NavLink to="/login" >Login</NavLink>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex items-center lg:ml-[350px]">
                <ul className="menu-horizontal text-white px-8">
                    <li className="text-xl font-semibold pr-6">
                        <NavLink to="/" >Home</NavLink>
                    </li>
                    <li className="text-xl font-semibold pr-6">
                        <button onClick={handleDeshBoard}><NavLink to="/deshboard/userHome" >Deshboard</NavLink></button>
                    </li>
                    <li className="text-xl font-semibold ">
                        <NavLink to="ourmenu" >Our Menu</NavLink>
                    </li>
                    <li className="text-xl font-semibold pl-6">
                        <NavLink to="/orderfood/salad" className={({ isActive }) => {
                            return isActive ? "text-[#EEFF25] underline" : "";
                        }}>Order Food</NavLink>
                    </li>
                    <li>
                        <button onClick={handleCart}>
                            <Link to="/deshboard/mycart">
                                <div className="pl-4 relative">
                                    <span className="text-4xl"><BsCart3 /></span>
                                    <p className="bg-[#EEFF25] text-center text-black rounded-full absolute top-4 -right-5 px-2">+{cart.length}</p>
                                </div>
                            </Link>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <li className="text-xl font-semibold  list-none pr-6">
                    {
                        user ? <Link> <button onClick={handleLogOut} className="flex items-center gap-1 ">
                            LogOut<MdLogout></MdLogout>
                        </button></Link>
                            :
                            <NavLink to="/login">
                                <h2 className="flex items-center gap-1"><span>Login</span> <MdLogin></MdLogin></h2>
                            </NavLink>
                    }
                </li>
                <div className="pr-8">
                    {
                        user ? <img className="h-12 w-12 rounded-full" src={user.photoURL} alt="" />
                            :
                            <p className="text-3xl"> <FaUserAlt></FaUserAlt> </p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;