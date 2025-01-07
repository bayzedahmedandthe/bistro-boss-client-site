import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const LayOut = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes("/login") || location.pathname.includes("/register")
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default LayOut;