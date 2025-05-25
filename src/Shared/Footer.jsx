import { NavLink } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { toast } from "react-toastify";
import fbLogo from "../assets/icon/icons8-facebook-logo-48.png"
import instaLogo from "../assets/icon/download (25).jpg"

const Footer = () => {
    const [isAdmin] = useAdmin();
    const handleDeshBoard = () => {
        if (!user) {
            return toast.error("You are not logged In. Please LogIn Now");

        }
    }
    return (
        <footer className="bg-gray-900 text-gray-200 py-8">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-between md:pl-0 pl-5">
                <div className="w-full sm:w-1/4 mb-6">
                    <h3 className="text-xl font-semibold">Bistro Boss</h3>
                    <p className="mt-2 text-gray-400 italic max-w-xs">
                        Serving you authentic and delicious meals with love and care, every single day.
                    </p>
                </div>
                <div className="w-full sm:w-1/4 mb-6">
                    <h4 className="font-semibold mb-2">Contact Us</h4>
                    <p>Phone: +880 1929564378</p>
                    <p>Email: info@bistroboss.com</p>
                    <p>Address: 123 Food Street, Dhaka, Bangladesh</p>
                </div>
                <div className="w-full sm:w-1/4 mb-6">
                    <h4 className="font-semibold mb-2">Quick Links</h4>
                    <ul>
                        <li className="">
                            <NavLink to="/" >Home</NavLink>
                        </li>

                        <li className="">
                            <NavLink to="ourmenu" >Our Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to="/orderfood/salad" className={({ isActive }) => {
                                return isActive ? "text-[#EEFF25] underline" : "";
                            }}>Order Food</NavLink>
                        </li>
                        {
                            isAdmin ? <p className="">
                                <button className="hover:underline" onClick={handleDeshBoard}><NavLink to="/deshboard/homeAdmin" >Deshboard</NavLink></button>
                            </p>
                                :
                                <p className="">
                                    <button className="hover:underline" onClick={handleDeshBoard}><NavLink to="/deshboard/home" >Deshboard</NavLink></button>
                                </p>
                        }
                    </ul>
                </div>
                <div className="w-full sm:w-1/4 mb-6">
                    <h4 className="font-semibold mb-2">Follow Us</h4>
                    <p className="flex items-center">
                        <a href="https://facebook.com/bistroboss" target="_blank" rel="noreferrer" className="mr-4 hover:text-white">
                        <img src={fbLogo} alt="" />
                        </a>
                        <a href="https://instagram.com/bistroboss" target="_blank" rel="noreferrer" className="hover:text-white">
                        <img className="h-8 w-8" src={instaLogo} alt="" />
                        </a>
                    </p>
                </div>
            </div>
            <p className="text-center text-gray-500 mt-8 text-sm">© 2025 Bistro Boss. All rights reserved.</p>
        </footer>

    );
};

export default Footer;