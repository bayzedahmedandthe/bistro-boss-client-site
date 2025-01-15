import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
        return <div className="min-h-screen flex justify-center"><span className="loading loading-ball loading-lg"></span></div>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/login" state={{from: location}}></Navigate>

};
export default AdminRoute;