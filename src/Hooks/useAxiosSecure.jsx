import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: "https://bistro-boss-server-e872f67a2-bayzed-ahmeds-projects.vercel.app/"
});
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth();
    axiosSecure.interceptors.request.use( (config) => {
        // request interceptor to add authorization header for every secure call to the API
        const token = localStorage.getItem("access-token");
        // console.log(token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, (error) => {
        return Promise.reject(error);
    })

    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, async(error) => {
        const status = error.response.status;

        // for 401 or 403 logout the user and move the user to the login
        if(status === 401 || status === 403){
            logOut();
            navigate("/login");
        }
        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;