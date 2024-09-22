import React from 'react'
import Slider from '../Components/Slider'
import CategoryProduct from '../Components/CategoryProduct'
import Product from '../Components/Product'

const Home = () => {
  return (
    <div className='conatiner mx-auto px-[20px]'>
      <Slider />
      <CategoryProduct />
      <Product />
    </div>
  )
}

export default Home
