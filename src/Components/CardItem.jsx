import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const CardItem = () => {
    console.log(window.pageYOffset)
    return (
        <>
            <div className="fixed top-[20%] right-0 p-[10px] ">
                <div className="text-3xl bg-white p-[10px] border border-green-400 z-50 rounded-lg">
                    <FaShoppingCart />
                    <p className="text-[16px] bg-green-400 h-[20px] w-[20px] flex items-center justify-center rounded-full text-white font-[600] absolute top-0 right-0">0</p>
                </div>
            </div>
        </>
    )
}

export default CardItem
