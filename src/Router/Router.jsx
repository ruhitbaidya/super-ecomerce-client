
import Home from "../Pages/Home";
import Regtister from "../Pages/Regtister";
import SignIn from "../Pages/SignIn";
import Layout from "../Pages/Lyout";
import CategoryAll from "../Pages/CategoryAll";
import Error from '../Pages/Error'
import CheckOutPage from "../Pages/CheckOutPage";
import UserDashboard from "../Dashboard/UserDashboard/UserDashboard";
import ControlAllProduct from "../Dashboard/DashboardCom/AdminComponent/ControlAllProduct";
import ProductAprove from "../Dashboard/DashboardCom/AdminComponent/ProductAprove";
import RoolChecker from "../Dashboard/DashboardCom/AdminComponent/RoolChecker";
import ControlProduct from "../Dashboard/DashboardCom/SellerComponent/ControlProduct";
import CreateProduct from "../Dashboard/DashboardCom/SellerComponent/CreateProduct";
import Byehistory from "../Dashboard/DashboardCom/UserComponent/Byehistory";
import VerifyPage from "../Pages/VerifyPage";
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
            },
            {
                path : 'verifyEmail',
                element : <VerifyPage />
            }
        ]
    },
    {
        path : `/dashboard`,
        element : <UserDashboard />,
        children : [
            {
                path : `admin/procutControl`,
                element : <ControlAllProduct />
            },
            {
                path : `admin/productAproved`,
                element : <ProductAprove />
            },
            {
                path : `admin/usercontrol`,
                element : <RoolChecker />
            },
            {
                path : 'seller/controlproduct',
                element : <ControlProduct />
            },
            {
                path : 'seller/CreateProcut',
                element : <CreateProduct />
            },
            {
                path : 'user/byeHistory',
                element : <Byehistory />
            }
        ]
    }
])

export default router;