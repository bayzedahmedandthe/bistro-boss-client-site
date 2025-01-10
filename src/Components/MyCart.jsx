import { FaTrash } from "react-icons/fa";
import useCart from "../Hooks/useCart";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";


const MyCart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    return (
        <div>
            <SectionTitle heading={"Wanna Add More?"} subHeading={"My Cart"}></SectionTitle>
            <div className="bg-white w-10/12 mx-auto mb-20">
                <div className="flex items-center justify-between p-4">
                    <h2 className="text-2xl uppercase">Total Orders: {cart.length}</h2>
                    <h2 className="text-2xl uppercase">Total Price: {totalPrice}</h2>
                    <button className="uppercase bg-[#D1A054] md:text-lg rounded-lg px-6 py-2">Pay</button>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
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
                                <tr>
                                    <td className="text-lg">{idx+1}</td>
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
                                                <button className="btn  text-orange-600 text-lg"><FaTrash></FaTrash></button>
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