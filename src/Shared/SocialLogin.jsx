import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const handleLoginWithGoogle = () => {
        googleSignIn()
        .then(result => {
            console.log(result);
            navigate(from, { replace: true });
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
        })
    }
    return <div className="flex items-center gap-4 justify-center mt-6">
        <p className="text-lg">Or Sign in with</p>
        <button onClick={handleLoginWithGoogle} className="text-2xl border-2 border-[#D1A054] rounded-full p-2"> <FcGoogle></FcGoogle></button>
    </div>
}

export default SocialLogin;