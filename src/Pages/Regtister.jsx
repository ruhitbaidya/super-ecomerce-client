import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
const Regtister = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        axios.post('http://localhost:5000/registerUser', data)
        .then((res)=> console.log(res.data))
        .then((err)=> console.log(err))
    }
    return (
        <>
            <div className='container mx-auto px-[10px]'>
                <div className='w-[80%] mx-auto mt-[20px]'>
                    <div className='border border-green-400 p-[30px] rounded-lg'>
                        <h2 className='text-3xl text-center font-[700]'>Register</h2>
                        <p className='text-center mt-[10px]'>Please fill the following form with your personal information</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex justify-between gap-[30px] my-[30px]'>
                                <div className='w-[50%]'>
                                    <label htmlFor="name">Full Name *</label>
                                    <input  {...register("fullName", { required: true })} className='w-full border focus:outline-none p-[10px] rounded-lg' placeholder='Enter Your Full Name' type="text" />
                                    {errors.fullName && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className='w-[50%]'>
                                    <label htmlFor="gender" className='w-full'>Gender *</label>
                                    <select  {...register("gender", { required: true })} className="select select-bordered w-full">
                                        <option disabled selected value="">Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="others">Others</option>
                                    </select>
                                    {errors.gender && <span className='text-red-500'>This field is required</span>}
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <label htmlFor="dob">Date Of Birth *</label>
                                        <input  {...register("dob", { required: true })} className='w-full border focus:outline-none p-[10px] rounded-lg' type="date" />
                                        {errors.dob && <span className='text-red-500'>This field is required</span>}
                                    </div>
                                </div>
                            </div>
                            <div className='my-[30px] flex justify-between gap-[30px]'>
                                <div className='flex-1'>
                                    <label htmlFor="email">Email *</label>
                                    <input  {...register("email", { required: true })} className='w-full border focus:outline-none p-[10px] rounded-lg' type="email" placeholder='Enter Your  Email' />
                                    {errors.email && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className='flex-1'>
                                    <label htmlFor="phone">Phone *</label>
                                    <input  {...register("phone", { required: true })} className='w-full border focus:outline-none p-[10px] rounded-lg' type="number" placeholder='Enter Your  Phone' />
                                    {errors.phone && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className='flex-1'>
                                    <label htmlFor="password">Password *</label>
                                    <input  {...register("password", { required: true })} className='w-full border focus:outline-none p-[10px] rounded-lg' type="password" placeholder='*************' />
                                    {errors.password && <span className='text-red-500'>This field is required</span>}
                                </div>
                            </div>
                            <div className='space-y-4'>
                                <h3 className='text-2xl font-[700]'>Adders</h3>

                                <div>
                                    <label htmlFor="cityName">City Name *</label>
                                    <input  {...register("cityName", { required: true })} className='w-full border focus:outline-none p-[10px] rounded-lg' type="text" placeholder='Enter Your City Name' />
                                    {errors.cityName && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div>
                                    <label htmlFor="district">District *</label>
                                    <input  {...register("district", { required: true })} className='w-full border focus:outline-none p-[10px] rounded-lg' type="text" placeholder='enter Your district' />
                                    {errors.district && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div>
                                    <label htmlFor="zipcode">Zip Code *</label>
                                    <input  {...register("zipCode", { required: true })} className='w-full border focus:outline-none p-[10px] rounded-lg' type="text" placeholder='enter Your zipcode' />
                                    {errors.zipCode && <span className='text-red-500'>This field is required</span>}
                                </div>
                            </div>
                            <div className='mt-[20px]'>
                                <button className='w-full border focus:outline-none p-[10px] rounded-lg'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Regtister
