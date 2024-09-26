import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { AuthUser } from '../UserAuth/UserAuth';
import {Link} from 'react-router-dom'
const CardItem = () => {
    const { cardItem } = useContext(AuthUser);
    return (
        <>
            <div className={`fixed top-[7%] right-0 p-[10px] z-50 ${cardItem.length <= 0 ? 'hidden' : ''}`}>
                <Link state={cardItem} to='product/checkout'>
                    <div className="text-3xl bg-white p-[10px] border border-green-400 z-50 rounded-lg">
                        <FaShoppingCart />
                        <p className="text-[16px] bg-green-400 h-[20px] w-[20px] flex items-center justify-center rounded-full text-white font-[600] absolute top-0 right-0">{cardItem.length}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CardItem
