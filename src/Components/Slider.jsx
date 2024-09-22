import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
import image4 from '../assets/4.jpg'
import image5 from '../assets/5.jpg'
import './common.css'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const Slider = () => {
    return (
        <div className='rounded-lg'>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                pagination={{
                    dynamicBullets: true,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                loop={true}
                autoplay={{
                    delay: 3000, // 3 seconds delay between slides
                    disableOnInteraction: false, // Autoplay will not stop when you interact with the slider
                }}

                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='h-[400px] w-full relative'>
                        <img className='object-contain' src={image1} alt="" />
                        <div className=' text-white z-30 absolute top-0  h-full w-full bg-custom'>
                           <div className='w-full h-full flex justify-center items-center'>
                           <div className='text-center space-y-4'>
                           <h2 className='text-3xl font-[600]'>Mobile Shop For Our Smart Cutomer</h2>
                            <p>This Mobile Only For This People people are smart and our regular customer and he/she bye 5000+ shipping in our market</p>
                            <button className='py-[8px] px-[30px] border border-green-400 hover:bg-white hover:text-black'>Buy Now</button>
                           </div>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[400px] w-full relative'>
                        <img className='object-contain' src={image2} alt="" />
                        <div className=' text-white z-30 absolute top-0  h-full w-full bg-custom'>
                           <div className='w-full h-full flex justify-center items-center'>
                           <div className='text-center space-y-4'>
                           <h2 className='text-3xl font-[600]'>Mobile Shop For Our Smart Cutomer</h2>
                            <p>This Mobile Only For This People people are smart and our regular customer and he/she bye 5000+ shipping in our market</p>
                            <button className='py-[8px] px-[30px] border border-green-400 hover:bg-white hover:text-black'>Buy Now</button>
                           </div>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[400px] w-full relative'>
                        <img className='object-contain' src={image3} alt="" />
                        <div className=' text-white z-30 absolute top-0  h-full w-full bg-custom'>
                           <div className='w-full h-full flex justify-center items-center'>
                           <div className='text-center space-y-4'>
                           <h2 className='text-3xl font-[600]'>Mobile Shop For Our Smart Cutomer</h2>
                            <p>This Mobile Only For This People people are smart and our regular customer and he/she bye 5000+ shipping in our market</p>
                            <button className='py-[8px] px-[30px] border border-green-400 hover:bg-white hover:text-black'>Buy Now</button>
                           </div>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[400px] w-full relative'>
                        <img className='object-contain' src={image4} alt="" />
                        <div className=' text-white z-30 absolute top-0  h-full w-full bg-custom'>
                           <div className='w-full h-full flex justify-center items-center'>
                           <div className='text-center space-y-4'>
                           <h2 className='text-3xl font-[600]'>Mobile Shop For Our Smart Cutomer</h2>
                            <p>This Mobile Only For This People people are smart and our regular customer and he/she bye 5000+ shipping in our market</p>
                            <button className='py-[8px] px-[30px] border border-green-400 hover:bg-white hover:text-black'>Buy Now</button>
                           </div>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[400px] w-full relative'>
                        <img className='object-contain' src={image5} alt="" />
                        <div className=' text-white z-30 absolute top-0  h-full w-full bg-custom'>
                           <div className='w-full h-full flex justify-center items-center'>
                           <div className='text-center space-y-4'>
                           <h2 className='text-3xl font-[600]'>Mobile Shop For Our Smart Cutomer</h2>
                            <p>This Mobile Only For This People people are smart and our regular customer and he/she bye 5000+ shipping in our market</p>
                            <button className='py-[8px] px-[30px] border border-green-400 hover:bg-white hover:text-black'>Buy Now</button>
                           </div>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider
