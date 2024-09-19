
import axios from "axios"
import { useForm } from "react-hook-form"

const SignIn = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
      console.log(data)
      axios.post('http://localhost:5000/login', data)
      .then((res)=> console.log(res))
      .catch((err)=> console.log(err))
    }
  return (
    <>
      <div className='container mx-auto px-[10px]'>
        <div className='h-screen flex justify-center items-center'>
            <div className='p-[40px] border w-[60%] rounded-lg'>
                <h2 className='text-2xl font-[600] text-center'>Login Here</h2>
                <p className='text-center mt-[10px]'>Login And Explore More</p>

            <form onSubmit={handleSubmit(onSubmit)} className='mt-[20px]'>
                <div>
                    <label htmlFor="email">Enter Your Email</label>
                    <input {...register("email", { required: true })} className='w-full border focus:outline-none p-[10px] rounded-lg' type="email" placeholder='Enter Your Email' />
                    {errors.email && <span className='text-red-500'>This field is required</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input {...register("password", { required: true })} className='w-full border focus:outline-none p-[10px] rounded-lg' type="password" placeholder='Enter Password' />
                    {errors.password && <span className='text-red-500'>This field is required</span>}
                </div>
                <div className='mt-[20px]'>
                    <button className='w-full border focus:outline-none p-[10px] rounded-lg'>Login</button>
                </div>
            </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
