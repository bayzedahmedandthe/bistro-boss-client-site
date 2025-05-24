import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://bistro-boss-server-2fqog3k2t-bayzed-ahmeds-projects.vercel.app/",
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;