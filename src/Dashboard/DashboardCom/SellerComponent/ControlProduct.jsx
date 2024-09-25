import React from 'react'

const ControlProduct = () => {
  return (
    <div className='w-full'>
      <table className='table'>
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="" alt="" /></td>
            <td>Orange</td>
            <td>125</td>
            <th>
              <button>Delete</button>
            </th>
          </tr>
        </tbody>
      </table>
      <div className='text-center'>
        <div className="join">
          <button className="join-item btn">1</button>
          <button className="join-item btn btn-active">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">4</button>
        </div>
      </div>
    </div>
  )
}

export default ControlProduct
