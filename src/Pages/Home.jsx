import React from 'react'
import Slider from '../Components/Slider'
import CategoryProduct from '../Components/CategoryProduct'
import Product from '../Components/Product'
import CardItem from '../Components/CardItem';

const Home = () => {
  return (
    <>
    <CardItem />
    <div className='conatiner mx-auto px-[20px]'>
      <Slider />
      <CategoryProduct />
      <Product />
      
    </div></>
  )
}

export default Home
