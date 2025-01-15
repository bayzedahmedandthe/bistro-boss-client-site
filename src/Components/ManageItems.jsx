import { FaEdit, FaTrash, FaUsers } from "react-icons/fa";
import useMenu from "../Hooks/useMenu";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const axiosSecure = useAxiosSecure();
    const [menu, , refetch] = useMenu();
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted.`,
                        icon: "success"
                    });
                }

            }
        });
    };
    const handleUpdateItem = (item) => {

    }
    return (
        <div>
            <SectionTitle heading={"Manage All Items"} subHeading={"Hurry Up!"}></SectionTitle>

            <div className=" w-10/12 mx-auto mb-20">
                <h1 className="md:text-2xl text-xl font-medium py-4 px-8">Total Items: </h1>
                <div>
                    <div className="overflow-x-auto px-8">
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Item Image</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        menu.map((item, index) =>
                                            <tr key={item._id}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                <img
                                                                    src={item.image} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h2 className="">{item.name}</h2>
                                                </td>
                                                <td>
                                                    <h2 className="">${item.price}</h2>
                                                </td>
                                                <td>
                                                    <button onClick={() => handleUpdateItem(item)} className="bg-[#D1A054] text-lg p-4 btn text-white"><Link to={`/deshboard/updateItem/${item._id}`}>
                                                    <FaEdit></FaEdit></Link></button>
                                                </td>
                                                <td>
                                                    <button onClick={() => handleDeleteItem(item)} className="btn text-orange-600 text-lg"><FaTrash></FaTrash></button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;