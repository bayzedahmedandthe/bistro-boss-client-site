import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheekOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useAuth();
    const [transactionId, setTransactionId] = useState("");
    const naviagte = useNavigate();


    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post("/create-payment-intent", { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (!card) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        });
        if (error) {
            console.log("Payment Error", error);
            toast.error(error.message)
        }
        else {
            console.log(paymentMethod);
        };
        // confirmed payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymous",
                    name: user?.name || "anonymous"

                }
            }
        });
        if (confirmError) {
            console.log("confirme error");
        }
        else {
            console.log("paymentIntent", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                setTransactionId(paymentIntent.id);
                // now save the payment in the database
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: "pending"
                };
                const res = await axiosSecure.post("payment", payment)
                console.log("payment save", res.data);
                Swal.fire({
                    title: "Success your payment",
                    icon: "success",
                    draggable: true
                });
                naviagte("/deshboard/paymentHistry")
            }
        }

    }
    return (
        <div>
            <form className="border-2 p-12" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="md:flex md:justify-between md:items-center">
                    <button className="md:px-8 py-2 px-4 border-2 mt-8 bg-[#D1A054] btn" type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                    <p className="text-gray-600 border-b-2 mt-8"><span className="text-black font-bold">Your Transaction Id: </span>{transactionId}</p>
                </div>
            </form>
        </div>
    );
};

export default CheekOutForm;