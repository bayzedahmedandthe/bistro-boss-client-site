import { Link, useNavigate } from "react-router-dom";
import img from "../assets/others/authentication1.png"
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import SocialLogin from "../Shared/SocialLogin";

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { creatUser, setUser, updateUserProfile } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);
        if (password.length < 6) {
            return toast.error("password must be 6 cherecter")
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if (!passwordRegex.test(password)) {
            return toast.error("password must be one uppercase one lowercase")
        }
        creatUser(email, password)
            .then(result => {
                navigate("/")
                console.log(result.user);
                const userInfo = {
                    name: result?.user?.displayName,
                    email: result?.user?.email
                }
                axiosPublic.post("/users", userInfo)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Registation Successful",
                            showConfirmButton: false,
                            timer: 2000
                        });
                    })

                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser((previousUser) => { return { ...previousUser, displayName: name, photoURL: photo } })
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="bg-[url('https://i.ibb.co.com/nwjym1j/authentication.png')]  p-28 bg-fixed bg-cover">
            <div className="md:flex jus items-center gap-16  border-4 rounded-lg shadow-2xl p-12">
                <div className="lg:max-w-[900px] w-full">
                    <h2 className="text-2xl font-medium text-center py-4">Register</h2>
                    <form onSubmit={handleRegister}>
                        <div className="form-control py-2">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control py-2">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Photo URL</span>
                            </label>
                            <input type="url" name="photo" placeholder="Enter Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control py-2">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Type here" className="input input-bordered" required />
                        </div>
                        <div className="form-control pb-1">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" required />
                        </div>
                        <button className="w-full my-12 text-lg font-semibold bg-[#D1A054] btn hover:bg-[#D1A054]">Register</button>
                    </form>
                    <SocialLogin></SocialLogin>
                    <div className="text-[#D1A054] text-center py-2">
                        <Link to="/login">Already Registered? Go to login</Link>
                    </div>
                </div>
                <div>
                    <img className="w-[1100px]" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;