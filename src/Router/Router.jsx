
import Regtister from "../Pages/Regtister";
import SignIn from "../Pages/SignIn";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Pages/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: "/register",
        element: <Regtister></Regtister>
    },
    {
        path: "/signin",
        element: <SignIn></SignIn>
    }
])

export default router;