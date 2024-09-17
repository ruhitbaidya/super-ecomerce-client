import Regtister from "../Pages/Regtister";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Pages/Home");

const router = createBrowserRouter([
    {
        path : '/',
        element : <Home></Home>
    },
    {
        path : "/register",
        element : <Regtister></Regtister>
    }
])

export default router;