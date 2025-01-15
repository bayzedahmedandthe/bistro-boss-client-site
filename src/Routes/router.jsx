import {
    createBrowserRouter,
  } from "react-router-dom";
import LayOut from "../LayOuts/LayOut";
import HomePage from "../Pages/HomePage/HomePage";
import OurMenu from "../Pages/OurMenu";
import FoodOrder from "../Pages/FoodOrder";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Deshboard from "../LayOuts/Deshboard";
import UserHome from "../Components/UserHome";
import MyCart from "../Components/MyCart";
import Reservation from "../Components/Reservation";
import AddReview from "../Components/AddReview";
import MyBooking from "../Components/MyBooking";
import PaymentHistory from "../Components/PaymentHistory";
import PrivetRoute from "./PrivetRoute";
import AdminHome from "../Components/adminHome";
import AddItems from "../Components/AddItems";
import ManageItems from "../Components/ManageItems";
import ManageBookings from "../Components/ManageBookings";
import AllUsers from "../Components/AllUsers";
import UpdateItems from "../Components/UpdateItems";
import AdminRoute from "./AdminRoute";


   const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      errorElement: <p>error page here</p>,
      children: [
        {
            path: "/", 
            element: <HomePage></HomePage>
        },
        {
          path: "/ourmenu",
          element: <OurMenu></OurMenu>
        },
        {
          path: "/orderfood/:category", 
          element: <FoodOrder></FoodOrder>
        },
        {
          path: "/login", 
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }

      ]
    },
    {
      path: "deshboard",
      element: <PrivetRoute><Deshboard></Deshboard></PrivetRoute>,
      children: [
        {
          path: "home",
          element: <UserHome></UserHome>
        },
        {
          path: "mycart",
          element: <MyCart></MyCart>
        },
        {
          path: "reservation", 
          element: <Reservation></Reservation>
        },
        {
          path: "review", 
          element: <AddReview></AddReview>
        },
        {
          path: "booking",
          element: <MyBooking></MyBooking>
        },
        {
          path: "payment", 
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path: "homeAdmin",
          element: <AdminHome></AdminHome>
        },
        {
          path: "addItems", 
          element: <AddItems></AddItems>
        },
        {
          path: "manageItems",
          element: <ManageItems></ManageItems>
        },
        {
          path: "manageBookings", 
          element: <ManageBookings></ManageBookings>
        },
        {
          path: "allUsers",
          element: <AllUsers></AllUsers>
        }, {
          path: "updateItem/:id",
          element: <AdminRoute><UpdateItems></UpdateItems></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        }
      ]
    }
    
  ]);
  export default router;