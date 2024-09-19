import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

import Footer from '../Components/Footer'
const Layout = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='my-[50px]'>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
