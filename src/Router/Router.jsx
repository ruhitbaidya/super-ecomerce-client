
import Home from "../Pages/Home";
import Regtister from "../Pages/Regtister";
import SignIn from "../Pages/SignIn";
import Layout from "../Pages/Lyout";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "register",
                element: <Regtister></Regtister>
            },
            {
                path: "signin",
                element: <SignIn></SignIn>
            }
        ]
    }
])

export default router;