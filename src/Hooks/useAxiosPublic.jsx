import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://bistro-boss-server-5xecajpic-bayzed-ahmeds-projects.vercel.app/",
    withCredentials: true
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;