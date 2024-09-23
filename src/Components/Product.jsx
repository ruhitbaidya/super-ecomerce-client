import React from 'react'
import product from '../NeedFile/product.json'
import { FaStar } from "react-icons/fa";
const Product = () => {
    console.log(product)
  return (
    <div>
      <div>
      <h2 className='text-4xl font-[700] text-center'>All Product</h2>
      <hr className='w-[30%]  border-2 border-green-400 mx-auto my-[30px]' />
        <div>
            <div className='grid grid-cols-3 gap-[25px]'>
                {
                    product.map((item)=>{
                        return <div className='p-[15px] border rounded-lg'>
                            <div className='border rounded-lg'>
                                <img className='w-full h-[200px] object-cover rounded-lg' src={item.image} alt="" />
                            </div>
                            <div className='mt-[20px] space-y-2 border p-[10px] rounded-lg'>
                                <h3 className='text-2xl font-[700]'>{item.title}</h3>
                                <p>{item.description}</p>
                                <p>${item.price}</p>
                                <p>{item.category}</p>
                                <p className='flex items-center gap-[10px]'><FaStar className='text-yellow-500' />({item.rating})</p>
                            </div>
                            <div className='text-right mt-[10px]'>
                                <button className='border border-green-400 px-[25px] py-[8px] rounded-lg'>Buy Now</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Product
