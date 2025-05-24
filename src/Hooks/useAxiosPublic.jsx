import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://bistro-boss-server-8pyom28pg-bayzed-ahmeds-projects.vercel.app/"
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;