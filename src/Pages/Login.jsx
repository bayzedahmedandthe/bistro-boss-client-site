import { Link } from "react-router-dom";
import img from "../assets/others/authentication1.png"
import { FcGoogle } from "react-icons/fc";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, [])
    const handleLogin =e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form .password.value;
        // console.log(email, password);
        
    };

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
            toast.success("Captcha matched")
        }
        else{
            setDisabled(true)
            // toast.error("Captcha not matched")
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
                            <input type="email" name="email" placeholder="Type here" className="input input-bordered" required />
                        </div>
                        <div className="form-control pb-1">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control pt-6">
                        <p className="text-lg py-4 font-medium"><LoadCanvasTemplate /></p>
                            <input type="text" name="captcha" ref={captchaRef} placeholder="Type here" className="input input-bordered" required />
                            <button onClick={handleValidateCaptcha} className=" my-4 max-w-[150px] bg-[#D1A054] py-1 text-lg rounded-lg">Validate</button>
                            {/* <label className="label ">
                                <span className="label-text text-blue-500 text-lg font-medium">Reload Captcha</span>
                            </label> */}
                        </div>
                        {/* <div className="form-control">
                            <input type="text" placeholder="Type here" className="input input-bordered" required />
                        </div> */}
                        <div className="form-control pt-10">
                            <input disabled={disabled} type="submit" value="Login" className="input input-bordered text-lg font-semibold bg-[#D1A054] btn hover:bg-[#D1A054]" required />
                        </div>
                    </form>
                    <div className="text-[#D1A054] text-center py-10">
                        <Link to="/register">New here? Create a New Account</Link>
                    </div>
                    <div className="flex items-center gap-4 justify-center">
                        <p className="text-lg">Or Sign in with</p>
                        <button className="text-2xl border-2 border-[#D1A054] rounded-full p-2"> <FcGoogle></FcGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;