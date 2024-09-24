
import Home from "../Pages/Home";
import Regtister from "../Pages/Regtister";
import SignIn from "../Pages/SignIn";
import Layout from "../Pages/Lyout";
import CategoryAll from "../Pages/CategoryAll";
import Error from '../Pages/Error'
import CheckOutPage from "../Pages/CheckOutPage";
import UserDashboard from "../Dashboard/UserDashboard/UserDashboard";
const { createBrowserRouter } = require("react-router-dom");
let rooleChecker = 'admin';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
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
            },
            {
                path : 'product/category',
                element : <CategoryAll />
            },
            {
                path : 'product/checkout',
                element : <CheckOutPage />
            }
        ]
    },
    {
        path : `/${rooleChecker}/dashboard`,
        element : <UserDashboard />,
        children : [
            {
                path : ''
            }
        ]
    }
])

export default router;