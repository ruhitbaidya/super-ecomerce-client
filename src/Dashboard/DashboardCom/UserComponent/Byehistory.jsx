import React from 'react'
import { IoMdClose } from "react-icons/io";
const Byehistory = () => {
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Seller</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Orange</td>
            <td>rhitbaidya@gmail.com</td>
            <td>125</td>
            <th>
              <button className='bg-red-500 text-white text-2xl p-[10px]'><IoMdClose /></button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Byehistory
