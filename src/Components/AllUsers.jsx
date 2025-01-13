import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })
    const handleDelete = id => {
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
                axiosSecure.delete(`/users/${id}`)
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
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }
    return (
        <div>
            <SectionTitle heading={"Manage All Users"} subHeading={"How Many??"}></SectionTitle>

            <div className="bg-white w-10/12 mx-auto mb-20">
                <h1 className="md:text-2xl text-xl font-medium py-4 px-8">Total Users: {users.length}</h1>
                <div>
                    <div className="overflow-x-auto px-8">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-[#D1A054] text-white">
                                <tr>
                                    <th className="text-xl">NO.</th>
                                    <th className="text-xl">Name</th>
                                    <th className="text-xl">Email</th>
                                    <th className="text-xl">Role</th>
                                    <th className="text-xl">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, idx) =>
                                        <tr key={user._id}>
                                            <td className="text-lg">{idx + 1}</td>
                                            <td className="text-lg">
                                                {user.name}
                                            </td>
                                            <td className="text-lg">{user.email}</td>
                                            <td>
                                                {user.role === "admin" ? <h4 className="text-lg font-semibold">Admin</h4> : <button onClick={() => handleMakeAdmin(user)} className="bg-[#D1A054] text-lg p-4 btn text-white"><FaUsers></FaUsers></button>}
                                            </td>
                                            <td>
                                                <button onClick={() => handleDelete(user._id)} className="btn text-orange-600 text-lg"><FaTrash></FaTrash></button>
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
    );
};

export default AllUsers;