import AllServices from "../Pages/AllServices/AllServices";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";

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
        ]
    }
])