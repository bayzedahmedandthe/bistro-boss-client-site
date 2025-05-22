import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaUserAlt } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { MdLogin, MdLogout } from "react-icons/md";
import useCart from "../Hooks/useCart";
import { toast } from "react-toastify";
import useAdmin from "../Hooks/useAdmin";

const Navbar = () => {
    const [isAdmin] = useAdmin();
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
        if (!user) {
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
                        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow bg-slate-800">
                        <li className="text-xl  pr-6">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="pr-6">
                            {
                                isAdmin ? <p className=" pr-6">
                                    <button onClick={handleDeshBoard}><NavLink to="/deshboard/homeAdmin" >Deshboard</NavLink></button>
                                </p>
                                    :
                                    <p className=" pr-6">
                                        <button onClick={handleDeshBoard}><NavLink to="/deshboard/home" >Deshboard</NavLink></button>
                                    </p>
                            }
                        </li>
                        <li className="text-xl  ">
                            <NavLink to="ourmenu" >Our Menu</NavLink>
                        </li>
                        <li className="text-xl ">
                            <NavLink to="/orderfood/salad">Order Food</NavLink>
                        </li>
                        <li>
                            <button onClick={handleCart}>
                                <Link to="/deshboard/mycart">
                                    <div className="relative">
                                        <span className="text-2xl"><BsCart3 /></span>
                                        <p className="bg-[#EEFF25] text-center text-black rounded-full absolute top-2 -right-5 px-1">+{cart.length}</p>
                                    </div>
                                </Link>
                            </button>
                        </li>
                        <li className="text-xl ">
                            <NavLink to="/login" >Login</NavLink>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="md:pl-4 pl-0 text-xl cursor-pointer">Bistro Boss</Link>
            </div>
            <div className="navbar-center hidden lg:flex items-center lg:ml-[350px]">
                <ul className="menu-horizontal text-white px-8">
                    <li className="text-xl pr-6">
                        <NavLink to="/" >Home</NavLink>
                    </li>
                    {
                        isAdmin ? <p className="text-xl pr-6">
                            <button onClick={handleDeshBoard}><NavLink to="/deshboard/homeAdmin" >Deshboard</NavLink></button>
                        </p>
                            :
                            <p className="text-xl pr-6">
                                <button onClick={handleDeshBoard}><NavLink to="/deshboard/home" >Deshboard</NavLink></button>
                            </p>
                    }
                    <li className="text-xl">
                        <NavLink to="ourmenu" >Our Menu</NavLink>
                    </li>
                    <li className="text-xl pl-6">
                        <NavLink to="/orderfood/salad" className={({ isActive }) => {
                            return isActive ? "text-[#EEFF25] underline" : "";
                        }}>Order Food</NavLink>
                    </li>
                    <li>
                        <button onClick={handleCart}>
                            <Link to="/deshboard/mycart">
                                <div className="pl-4 relative">
                                    <span className="text-3xl"><BsCart3 /></span>
                                    <p className="bg-[#EEFF25] text-center text-black rounded-full absolute top-4 -right-5 px-2">+{cart.length}</p>
                                </div>
                            </Link>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <li className="text-xl list-none pr-6">
                    {
                        user ? <Link> <button onClick={handleLogOut} className="flex items-center gap-1 text-xl">
                            LogOut<MdLogout></MdLogout>
                        </button></Link>
                            :
                            <NavLink to="/login">
                                <h2 className="flex items-center gap-1">Login</h2>
                            </NavLink>
                    }
                </li>
                <div className="pr-8">
                    {
                        user ? <img className="md:h-12 md:w-12 h-8 w-8 rounded-full" src={user.photoURL} alt="" />
                            :
                            <p className="text-3xl"> <FaUserAlt></FaUserAlt> </p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;