import React from 'react'

const CreateProduct = () => {
  return (
    <div>
      <div>
        <form>
          <div>
            <div>
              <label htmlFor="pName">Product name</label>
              <input className='w-full p-[10px]' type="text" placeholder='Product Name' />
            </div>
            <div>
              <label htmlFor="pPrice">Product Price</label>
              <input className='w-full p-[10px]' type="number" placeholder='Product Price' />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="pName">Product Size</label>
              <input className='w-full p-[10px]' type="number" placeholder='Product Name' />
            </div>
            <div>
              <label htmlFor="pPrice">Product Queantity</label>
              <input className='w-full p-[10px]' type="number" placeholder='Product Price' />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="pName">Product Size</label>
              <textarea className='w-full p-[10px]' name="" id="" placeholder='Product Description'></textarea>
            </div>
            <div>
              <label htmlFor="pPrice">Product Queantity</label>
              <input className='w-full p-[10px]' type="file" placeholder='Product image' />
            </div>
          </div>
          <div>
            <button className='w-full p-[10px] bg-green-400 text-white'>Add Product</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateProduct
