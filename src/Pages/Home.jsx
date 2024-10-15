import React, { useEffect } from 'react'
import Slider from '../Components/Slider'
import CategoryProduct from '../Components/CategoryProduct'
import Product from '../Components/Product'
import CardItem from '../Components/CardItem';
import {useDispatch, useSelector} from "react-redux"
import { fetchGetData } from '../fetcher/AllGetsThunkSlice';

const Home = () => {
  const {isLoading, data, error} = useSelector(state=> state.getData)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchGetData())
  }, [])
  console.log(data)
  console.log(error)
  console.log(isLoading)
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
