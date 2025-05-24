import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://bistro-boss-server-e872f67a2-bayzed-ahmeds-projects.vercel.app/",
    withCredentials: true
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;