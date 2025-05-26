import { useContext, useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "../Providers/AuthProvider";
import { FaTrash } from "react-icons/fa";

const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const customAxios = useAxiosPublic();
    const [bookingData, setBookingData] = useState([]);
    useEffect(() => {
        customAxios.get(`/booking?email=${user?.email}`)
            .then(res => {
                setBookingData(res.data)
            })
    }, []);
    console.log(bookingData);
    // https://bistro-boss-server-liart-nine.vercel.app/
    return (
        <div>
            <SectionTitle heading="My Bookings" subHeading="Excellent Ambience"></SectionTitle>
            <div className='md:m-20 md:mt-0 bg-white'>
                <h2 className='md:text-3xl font-semibold text-xl p-4'>Total Bookings: {bookingData?.length}</h2>
                <div className="overflow-x-auto p-4">
                    <table className="table table-lg">
                        <thead>
                            <tr className='md:text-lg text-md font-semibold bg-[#D1A054] text-white rounded-t-lg'>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Guests</th>
                                <th>Date</th>
                                <th className="text-xl">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookingData?.map((item, idx) => (
                                    <tr key={item?._id}>
                                        <td>{idx + 1}</td>
                                        <td>{item?.name}</td>
                                        <td>{item?.email}</td>
                                        <td>{item?.guest}</td>
                                        <td>{item?.date}</td>
                                        <td>
                                            <button onClick={() => handleDelete(item._id)} className="btn  text-orange-600 text-lg"><FaTrash></FaTrash></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBooking;