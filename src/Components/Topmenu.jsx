import React from 'react'
import { NavLink } from 'react-router-dom'

const Topmenu = () => {
  let rooleChecker = 'admin';
  return (
    <>
      <div>
        <div className='container mx-auto px-[10px]'>
            <div className='py-[10px]'>
                <ul className='flex justify-end items-center gap-[25px] text-white'>
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink>About</NavLink></li>
                    <li><NavLink>Contact</NavLink></li>
                    <li><NavLink to={`/dashboard`}>Dashboard</NavLink></li>
                    <li><NavLink to='/signin'>Login</NavLink></li>
                    <li><NavLink to="/register">SignUp</NavLink></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Topmenu
