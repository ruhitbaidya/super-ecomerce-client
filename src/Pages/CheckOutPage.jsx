import React, { useContext } from 'react'
import { IoClose } from "react-icons/io5";
import { AuthUser } from '../UserAuth/UserAuth';
import axios from "axios"
const CheckOutPage = () => {
  const {cardItem, setCardItem} = useContext(AuthUser);
  const totalPrice = cardItem.reduce((total, item)=> total + item.price, 0)
  const handelDeleteProduct = (id)=>{
    const delteProduct = cardItem.filter((item)=> item.id !== id);
    setCardItem(delteProduct)
  }
  const handelPayment = ()=>{
    axios.post('http://localhost:7000/auth/create_payment', {name: "Ruhit Baidya", money: 200})
    .then((res)=> {
      // console.log(res.data)
      window.location.replace(res.data)
    })
    .catch((err)=> console.log(err.message))
  }
  return (
    <div className='container mx-auto p-[10px]'>
      <table className='table'>
        <thead>
          <tr>
            <th> Product Image</th>
            <th>Name Product</th>
            <th>Price Product</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            cardItem.map((pro)=>{
              return <tr key={pro.id}>
                <td><img className='w-[50px] h-[50px]' src={pro.image} alt="" /></td>
                <td>{pro.title}</td>
                <td>$ {pro.price}</td>
                <td><button onClick={()=> handelDeleteProduct(pro.id)} className='btn bg-red-500 text-white text-2xl'><IoClose /></button></td>
              </tr>
            })
          }
        </tbody>
        <tfoot>
          <tr className='text-2xl font-bold'>
            <td></td>
            <td>
              Total Price
            </td>
            <td>$ {totalPrice}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <div className='text-center mt-[50px]'>
        <button disabled={cardItem.length > 0 ? false : true} className='border bg-yellow-400 rounded-lg px-[60px] py-[12px]' onClick={handelPayment}>Payment</button>
      </div>
    </div>
  )
}

export default CheckOutPage
