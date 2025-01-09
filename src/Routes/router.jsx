import {
    createBrowserRouter,
  } from "react-router-dom";
import LayOut from "../LayOuts/LayOut";
import HomePage from "../Pages/HomePage/HomePage";
import OurMenu from "../Pages/OurMenu";
import FoodOrder from "../Pages/FoodOrder";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Secret from "../Components/Secret";
import PrivetRoute from "./PrivetRoute";

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
        },
        {
          path: "/secret", 
          element: <PrivetRoute><Secret></Secret></PrivetRoute>
        }
      ]
    }
    
  ]);
  export default router;