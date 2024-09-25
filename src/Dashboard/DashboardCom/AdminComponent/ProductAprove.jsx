import React from 'react'

const ProductAprove = () => {
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
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Who shot first?</option>
                <option>Aproved</option>
                <option>Reject</option>
              </select>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProductAprove
