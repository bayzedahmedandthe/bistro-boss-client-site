import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";


const MenuCard = ({ item }) => {
    const [ , refetch] = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const handleAddToCart = () => {
        if (user && user.email) {

            const cartItem = {
                menuId: item._id,
                email: user.email,
                name: item.name,
                price: item.price,
                image: item.image
            }
            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    console.log(res.data);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${item.name} added to your cart`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                    refetch();
                })
        }
        else {
            Swal.fire({
                title: "You are not logged In",
                text: "Please login to add the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="bg-slate-100">
            <div className="relative">
                <img src={item.image} alt="" />
                <p className="bg-black text-white px-4 absolute right-4 top-4">${item.price}</p>
            </div>
            <h3 className="text-2xl font-medium py-4 text-center">{item.name}</h3>
            <p className="text-center px-2">{item.recipe}</p>
            <div className="flex justify-center">
                <button
                    onClick={ handleAddToCart }
                    className="border-b-2 border-b-yellow-700 rounded-lg hover:bg-slate-800 hover:text-white text-yellow-700 bg-slate-300 uppercase px-6 py-2 my-8 text-center">Add To Cart</button>
            </div>
        </div>
    );
};

export default MenuCard;