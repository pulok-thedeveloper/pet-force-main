import Dashboard from "../Layout/Dashboard/Dashboard";
import ManageService from "../Layout/Dashboard/ManageService/ManageService";
import About from "../Pages/About/About";
import AddService from "../Pages/AddService/AddService";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import AllServices from "../Pages/AllServices/AllServices";
import Contact from "../Pages/Contact/Contact";
import Blogs from "../Pages/Home/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main/Main");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/blogs',
                element: <AllBlogs></AllBlogs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/dashboard/myreviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/dashboard/manageservice',
                element: <ManageService></ManageService>
            }
        ]
    },
    {
        path: '/signup',
        element: <Signup></Signup>
    },
    {
        path: '/login',
        element: <Login></Login>
    }
])