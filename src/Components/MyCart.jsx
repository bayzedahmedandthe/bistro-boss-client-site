import { FaTrash } from "react-icons/fa";
import useCart from "../Hooks/useCart";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const MyCart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <SectionTitle heading={"Wanna Add More?"} subHeading={"My Cart"}></SectionTitle>
            <div className="bg-white w-10/12 mx-auto mb-20">
                <div className="flex items-center justify-between p-4">
                    <h2 className="text-2xl uppercase">Total Orders: {cart.length}</h2>
                    <h2 className="text-2xl uppercase">Total Price: {totalPrice}</h2>
                    <Link to="/deshboard/payment">
                        <button className="uppercase bg-[#D1A054] md:text-lg rounded-lg px-8 py-4">Pay</button>
                    </Link>
                </div>
                <div>
                    <div className="overflow-x-auto px-8">
                        <table className="table">
                            {/* head */}
                            <thead className="text-white bg-[#D1A054]">
                                <tr>
                                    <th className="text-xl">NO.</th>
                                    <th className="text-xl">Item Image</th>
                                    <th className="text-xl">Item Name</th>
                                    <th className="text-xl">Price</th>
                                    <th className="text-xl">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, idx) =>
                                        <tr key={item._id}>
                                            <td className="text-lg">{idx + 1}</td>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={item.image}
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-lg">
                                                {item.name}
                                            </td>
                                            <td className="text-lg">{item.price}</td>
                                            <th>
                                                <button onClick={() => handleDelete(item._id)} className="btn  text-orange-600 text-lg"><FaTrash></FaTrash></button>
                                            </th>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;