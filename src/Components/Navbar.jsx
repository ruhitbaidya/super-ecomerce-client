import  { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { AuthUser } from '../UserAuth/UserAuth';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const { cardItem } = useContext(AuthUser);
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start flex-1">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <input type="text" placeholder='Search Product' />
                <button>Search</button>
              </li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-xl text-white">SP - Commerce</Link>
        </div>
        <div className="navbar-center hidden lg:flex flex-1">

          <input className='border p-[10px] w-full' type="text" placeholder='Search Product' />
          <button className='border py-[14px] px-[15px] text-white'><FaSearch /></button>
        </div>
        <div className="navbar-end flex-1">
          <div className='relative'>
            <Link state={cardItem} to='product/checkout' className={`${cardItem.length <= 0 ? '' : 'hidden'}`}>
              <div className="text-3xl bg-green-400 p-[10px] border border-green-400 z-50 rounded-lg">
                <FaShoppingCart className='text-white' />
                <p className="text-[16px] bg-black h-[20px] w-[20px] flex items-center justify-center rounded-full text-white font-[600] absolute top-0 right-0">{cardItem.length}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
