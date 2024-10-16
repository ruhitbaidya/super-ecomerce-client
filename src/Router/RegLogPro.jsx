
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RegLogPro = () => {
 
    const token = localStorage.getItem('token');
    const userLocate = useLocation();
    console.log(userLocate.pathname)
    const navigate = useNavigate();
    useEffect(()=>{
        if(token){
          return navigate('/')
        }else{
          return navigate(userLocate?.pathname)
        }
    },[navigate,token, userLocate?.pathname])
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
}

export default RegLogPro
