import React from 'react'
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate()
    return (
        <div className="h-screen">
            <div className="text-center flex justify-center items-center h-full">
                <div>
                <h2 className="text-4xl font-[700]">404 Page Not Found</h2>
                <button onClick={()=> navigate("/")} className="px-[50px] py-[10px] border border-green-400 mt-[20px]">Go Home</button>
                </div>
            </div>
        </div>
    )
}

export default Error
