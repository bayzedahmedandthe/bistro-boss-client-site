import { FaBook, FaCartPlus, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { LiaStarSolid } from "react-icons/lia";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";



const Deshboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="bg-[#D1A054] min-h-screen w-1/5">
                {
                    isAdmin ?
                        <>
                            <ul>
                                <li><NavLink to="/deshboard/homeAdmin" className={({ isActive }) => {
                                    return isActive ? " text-white" : "";
                                }}>
                                    <h3 className="flex items-center gap-1 text-xl py-4 md:px-6"><span><FaHome></FaHome></span> Admin Home</h3></NavLink >
                                </li>
                                <li>
                                    <NavLink to="/deshboard/addItems" className={({ isActive }) => {
                                        return isActive ? " text-white" : "";
                                    }}>
                                        <h3 className="flex items-center gap-1 text-xl py-4 md:px-6"><span><FaUtensils /></span> Add Items</h3></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/deshboard/manageItems" className={({ isActive }) => {
                                        return isActive ? " text-white" : "";
                                    }}>
                                        <h3 className="flex items-center gap-1 text-xl py-4 px-6"><span><FaList /></span>Manage Items</h3></NavLink>
                                </li>
                                <li><NavLink to="/deshboard/manageBookings" className={({ isActive }) => {
                                    return isActive ? " text-white" : "";
                                }}>
                                    <h3 className="flex items-center gap-1 text-xl py-4 md:px-6"> <span><FaBook></FaBook></span> Manage Bookings</h3></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/deshboard/allUsers" className={({ isActive }) => {
                                        return isActive ? " text-white" : "";
                                    }}>
                                        <h3 className="flex items-center gap-1 text-xl py-4 md:px-6"><span><FaUsers /></span> All Users</h3></NavLink>
                                </li>

                                <li className="border border-white mx-4 my-4"></li>

                            </ul>
                        </>
                        :
                        <>
                            <ul>
                                <li><NavLink to="/deshboard/home" className={({ isActive }) => {
                                    return isActive ? " text-white" : "";
                                }}>
                                    <h3 className="flex items-center gap-1 text-xl py-4 md:px-6"><span><FaHome></FaHome></span> User Home</h3></NavLink >
                                </li>
                                <li>
                                    <NavLink to="/deshboard/reservation" className={({ isActive }) => {
                                        return isActive ? " text-white" : "";
                                    }}>
                                        <h3 className="flex items-center gap-1 text-xl py-4 md:px-6"><span><FaCalendarDays /></span> Reservation</h3></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/deshboard/payment" className={({ isActive }) => {
                                        return isActive ? " text-white" : "";
                                    }}>
                                        <h3 className="flex items-center gap-1 text-xl py-4 px-6"><span><RiSecurePaymentFill /></span>Payment Histry</h3></NavLink>
                                </li>
                                <li><NavLink to="/deshboard/mycart" className={({ isActive }) => {
                                    return isActive ? " text-white" : "";
                                }}>
                                    <h3 className="flex items-center gap-1 text-xl py-4 md:px-6"> <span><FaCartPlus></FaCartPlus></span> My Carts</h3></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/deshboard/review" className={({ isActive }) => {
                                        return isActive ? " text-white" : "";
                                    }}>
                                        <h3 className="flex items-center gap-1 text-xl py-4 md:px-6"><span><LiaStarSolid /></span> Add Review</h3></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/deshboard/booking" className={({ isActive }) => {
                                        return isActive ? " text-white" : "";
                                    }}>
                                        <h3 className="flex items-center gap-1 text-xl py-4 md:px-6"><span><TbBrandBooking /></span> My Booking</h3></NavLink>
                                </li>

                                <li className="border border-white mx-4 my-4"></li>

                            </ul>
                        </>
                }
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => {
                            return isActive ? " text-white" : "";
                        }}>
                            <h3 className="flex items-center gap-1 text-xl py-4 md:px-6"><span><FaHome /></span>Home</h3></NavLink>
                    </li>
                    <li>
                        <NavLink to="/ourmenu" className={({ isActive }) => {
                            return isActive ? " text-white" : "";
                        }}>
                            <h3 className="flex items-center gap-1 text-xl py-4 md:px-6"><span><TbBrandBooking /></span>menu</h3></NavLink>
                    </li>
                    <li>
                        <NavLink to="/orderfood/salad" className={({ isActive }) => {
                            return isActive ? " text-white" : "";
                        }}>
                            <h3 className="flex items-center gap-1 text-xl py-4 md:px-6"><span><TbBrandBooking /></span>Order Food</h3></NavLink>
                    </li>
                </ul>
            </div>
            <div className="bg-gray-100 flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Deshboard;