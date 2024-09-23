import React from 'react'
import { FaStar } from "react-icons/fa";
import { categories } from '../NeedFile/caregory';
import './common.css'
import { Link } from 'react-router-dom';
const CategoryProduct = () => {
    console.log(categories)
    return (
        <div className='py-[50px]'>
            <div className='container mx-auto px-[20px]'>
                <div>
                    <h2 className='text-4xl font-[700] text-center'>Category Product</h2>
                    <hr className='w-[30%]  border-2 border-green-400 mx-auto my-[30px]' />
                    <div>
                        <div className='grid grid-cols-3 gap-[25px]'>
                            {
                                categories.map((item) => {
                                    return <div className='p-[15px] border rounded-lg item-card'>
                                        <div className='space-y-4 mt-[10px]'>
                                            <h4 className='text-2xl font-[700]'>{item.title}</h4>
                                            <p>{item.description}</p>
                                            <div className='flex items-center gap-[5px] text-yellow-500'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <span className='text-green-400'>({item.rating})</span>
                                            </div>
                                        </div>
                                        <div className='mt-[18px]'>
                                            <Link to='product/category'>
                                                <button className='border border-green-400 w-full py-[8px] rounded-lg'>See More</button>
                                            </Link>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryProduct
