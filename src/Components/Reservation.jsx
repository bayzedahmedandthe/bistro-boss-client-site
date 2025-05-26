import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import time from "../assets/icon/Frame (6).png"
import location from "../assets/icon/Group 135.png"
import call from "../assets/icon/Group (1).png"
import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Reservation = () => {
        const { register, handleSubmit} = useForm();
        const customAxios = useAxiosPublic();
    const onSubmit = (data) => {
        console.log(data);
        customAxios.post("/booking", data)
        .then(res => {
            console.log("postData",res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="md:mx-20 mx-2">
            <SectionTitle subHeading={"Reservation"} heading={"Book A Table"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend font-semibold py-2">Date*</legend>
                    <input {...register("date")} type="text" className="input input-bordered bg-gray-100 w-full" placeholder="Enter bokking date" required />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend font-semibold py-2">Time*</legend>
                    <input {...register("time")} type="text" className="input input-bordered bg-gray-100 w-full" placeholder="Enter booking time" required/>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend font-semibold py-2">Guest*</legend>
                    <input {...register("guest")} type="text" className="input input-bordered bg-gray-100 w-full" placeholder="How many guests do you have" required/>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend font-semibold py-2">Name*</legend>
                    <input {...register("name")} type="text" className="input input-bordered bg-gray-100 w-full" placeholder="Enter your name" required/>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend font-semibold py-2">Phone*</legend>
                    <input {...register("phone")} type="text" className="input input-bordered bg-gray-100 w-full" placeholder="Enter your phone number" required/>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend font-semibold py-2">Email*</legend>
                    <input {...register("email")} type="email" className="input input-bordered bg-gray-100 w-full" placeholder="Enter your email address" required/>
                </fieldset>
                <div className="md:col-span-3 flex py-4 justify-center">
                    <button
                        type="submit"
                        className="bg-[#D1A054] text-white px-6 py-2 rounded hover:bg-yellow-800 transition"
                    >
                        Book A Table 🍽️
                    </button>
                </div>
            </form>
            <SectionTitle subHeading={"Visit Us"} heading={"Our Location"}></SectionTitle>
            <div className="flex items-center justify-between gap-2">
                <div className=" flex-1 w-full bg-[#D1A054] flex items-center justify-center py-2">
                    <img src={call} alt="" />
                </div>
                <div className=" flex-1 w-full bg-[#D1A054] flex items-center justify-center py-1">
                    <img src={location} alt="" />
                </div>
                <div className=" flex-1 w-full bg-[#D1A054] flex items-center justify-center py-2">
                    <img src={time} alt="" />
                </div>
            </div>
            <div className="flex  justify-evenly py-12 text-center mb-16">
                <div>
                    <h4 className="text-xl font-semibold">Phone</h4>
                    <p>+880 1929564378</p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold">Address</h4>
                    <p>123 Food Street, Dhaka, Bangladesh</p>
                </div>
                <div className="text-center">
                    <h4 className="text-xl font-semibold">Working hours</h4>
                    <p>Sat-thu: 10am-10pm</p>
                </div>
            </div>
        </div>
    );
};

export default Reservation;