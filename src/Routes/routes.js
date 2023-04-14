
import Login from "Pages/Auth/Login";
import Register from "Pages/Auth/Register";
import DashBoard from "Pages/Dashboard";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";

import Accounts from "Pages/Account";
import UpdateProfile from "Components/Account/UpdateProfile";
import SubscribePlan from "Components/Account/SubscribePlan";
import DashboardHome from "Pages/Dashboard/DashBoardHome";
 
export  const route = createBrowserRouter([{
    path:"/",
    element:<Main/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'register',
            element:<Register/>
        },
        {
            path:'login',
            element:<Login/>
        },
       
    ],
    
},
{
    path:"dashboard/:type",
    element:<DashBoard/>
},
{
    path:'/account',
    element:<Accounts/>,
},
{
    path:"/update/profile",
    element:<UpdateProfile/>
},
{
    path:"/billing/info",
    element:<SubscribePlan/>
},
{
   path:"/dashboardhome",
   element:<DashboardHome/>
}
])