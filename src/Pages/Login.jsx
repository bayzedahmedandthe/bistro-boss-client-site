import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../assets/others/authentication1.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { loginUser } = useContext(AuthContext);
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        loginUser(email, password)
            .then(result => {

                navigate(from, { replace: true })
                console.log(result.user);

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 2000
                });
            })
            .catch(error => {
                console.log(error);
                toast.error("Invalid Credientials")
            })
    };

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
            toast.success("Captcha matched")
        }
        else {
            setDisabled(true);
        }
    };
    return (
        <div className="bg-[url('https://i.ibb.co.com/nwjym1j/authentication.png')]  p-28 bg-fixed bg-cover">
            <div className="md:flex jus items-center gap-16  border-4 rounded-lg shadow-2xl p-12">
                <div>
                    <img className="w-[1100px]" src={img} alt="" />
                </div>
                <div className="lg:max-w-[900px] w-full">
                    <h2 className="text-2xl font-medium text-center py-4">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-control py-2">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control pb-1">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control pt-6">
                            <label><LoadCanvasTemplate /></label>
                            <input type="text" onBlur={handleValidateCaptcha} name="captcha" ref={captchaRef} placeholder="Type here" className="input input-bordered" required />
                        </div>
                        <div className="form-control pt-10">
                            <input disabled={disabled} type="submit" value="Login" className="input input-bordered text-lg font-semibold bg-[#D1A054] btn hover:bg-[#D1A054]" required />
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <div className="text-[#D1A054] text-center py-6">
                        <Link to="/register">New here? Create a New Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;