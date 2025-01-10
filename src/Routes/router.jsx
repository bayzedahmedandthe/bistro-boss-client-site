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
      element:<Deshboard></Deshboard>,
      children: [
        {
          path: "userHome",
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
        }
      ]
    }
    
  ]);
  export default router;