import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

import Footer from '../Components/Footer'
import Topmenu from '../Components/Topmenu'
const Layout = () => {
    return (
        <div>
            <div className='bg-green-400 py-[10px]'>
                <Topmenu />
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
