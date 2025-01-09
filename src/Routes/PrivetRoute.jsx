import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className="min-h-screen flex justify-center"><span className="loading loading-ball loading-lg"></span></div>
    }
    if(user){
        return children
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>

    
};

export default PrivetRoute;