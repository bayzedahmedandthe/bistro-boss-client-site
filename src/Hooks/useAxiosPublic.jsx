import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://bistro-boss-server-liart-nine.vercel.app/",
    withCredentials: true
})
const useAxiosPublic = () => {
    
    return axiosPublic;
};

export default useAxiosPublic;