import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import time from "../assets/icon/Frame (6).png"
import location from "../assets/icon/Group 135.png"
import call from "../assets/icon/Group (1).png"

const Reservation = () => {
    const handleSubmit = () => {
        console.log("checking");
    }
    return (
        <div className="md:mx-20 mx-2">
            <SectionTitle subHeading={"Reservation"} heading={"Book A Table"}></SectionTitle>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend font-semibold py-2">Date*</legend>
                    <input type="text" className="input input-bordered bg-gray-100 w-full" placeholder="Type here" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend font-semibold py-2">Time*</legend>
                    <input type="text" className="input input-bordered bg-gray-100 w-full" placeholder="Type here" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend font-semibold py-2">Guest*</legend>
                    <select defaultValue="Pick a browser" className="input input-bordered bg-gray-100 w-full">
                        <option disabled={true}>Pick a browser</option>
                        <option>Chrome</option>
                        <option>FireFox</option>
                        <option>Safari</option>
                    </select>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend font-semibold py-2">Name*</legend>
                    <input type="text" className="input input-bordered bg-gray-100 w-full" placeholder="Type here" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend font-semibold py-2">Phone*</legend>
                    <input type="text" className="input input-bordered bg-gray-100 w-full" placeholder="Type here" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend font-semibold py-2">Email*</legend>
                    <input type="text" className="input input-bordered bg-gray-100 w-full" placeholder="Type here" />
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