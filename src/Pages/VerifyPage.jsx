import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const VerifyPage = () => {
  const [loading, setLoading] = useState(true)
  const [emailU, setEmailU] = useState(null)
  const navigate = useNavigate()
  const token = localStorage.getItem('token');
  console.log(token)


  useEffect(() => {
    if (token === null) {
      navigate('/register')
    }
    if(token){
      axios.post('http://localhost:7000/auth/verifyCheck', {token})
      .then((res)=>{
        if(res?.data?.acActive){
          setLoading(false)
          navigate('/')
        }else{
          setLoading(false)
        }
        setEmailU(res?.data?.email)
      })
      .catch((err)=> console.log(err))
    }
  }, [])

  console.log(emailU)
  const handelSubmit = (e) => {
    e.preventDefault();
    const otpCode = e.target.otpCode.value;
    console.log({ otpCode })
    axios.post('http://localhost:7000/auth/verifyUser', {email: emailU, otpCode })
      .then((res) => {
        console.log(res.data.message)
        if(res.data.message === 'SuccessFully'){
          navigate("/")
        }else{
          alert('Your Otp Not Match')
        }
      })
      .catch((err) => console.log(err.message))
  }
 
  return (
    <>
      {
        loading ? <><span className="loading loading-spinner loading-lg"></span></> : <>
        <div className='h-[50vh] flex justify-center items-center'>
      
      <div className="container mx-auto ">
        <div className='w-[60%] mx-auto border border-green-400 p-[30px]'>
          <p className='text-center text-1xl font-[700]'>Please Check Your Email And Give Here 6 digit code </p>
          <form onSubmit={handelSubmit}>
            <div>
              <label htmlFor="otp">Verification Code</label>
              <input className='w-full p-[10px] border' name='otpCode' type="text" placeholder='Verify Code Here' />
            </div>
            <div className='mt-[20px]'>
              <button className='w-full py-[8px] bg-green-400 text-white'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
        </>
      }
    </>
  )
}

export default VerifyPage
