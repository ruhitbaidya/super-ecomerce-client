import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
const CreateProduct = () => {
  const [addCat, setAddCat] = useState([])
  const [imgfiles, setFiles] = useState(null)
  
    
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(imgfiles)
    const image = new FormData();
    image.append("image", imgfiles)
    axios.post(`https://api.imgbb.com/1/upload?expiration=600&key=0bc6b272da477cc83a91a8673edc1409`, image)
    .then((res)=> {
      const imageUrl = res.data.data.display_url;
      if(imageUrl){
        console.log({...data, imageUrl, addCat})
      }
    })
    .catch((err)=> console.log(err))

  };
  const addCategorys = ()=>{
    let caterogys = document.getElementById('caterogy');
    if(caterogys.value === ""){
      alert("Fill Up This Filed")
      return
    }
    setAddCat([...addCat, caterogys.value.toUpperCase()])
    caterogys.value = "";
  }
  const delCategory = (data)=>{
    const delData = addCat.filter((item)=> item !== data)
    setAddCat(delData)
  }


  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <label htmlFor="pName">Product name</label>
              <input {...register("pName")} className='w-full p-[10px]' type="text" placeholder='Product Name' />
            </div>
            <div>
              <label htmlFor="price">Product Price</label>
              <input {...register("price")} className='w-full p-[10px]' type="number" placeholder='Product Price' />
            </div>
          </div>
          <div>
            <div className='mt-[20px] flex gap-[20px] items-center'>
              <div>
              <input id="caterogy" className='p-[10px]' type="text" placeholder='Write Size' />
              <span onClick={addCategorys} className='btn bg-green-400 px-[20px] text-white'>Add</span>
              </div>
              <div className='flex'>
                {
                  addCat && addCat.map((item)=> <p className='bg-gray-300 p-[10px] mr-[5px] rounded-lg flex items-center gap-[10px]'>{item}  <IoClose  className='cursor-pointer' onClick={()=> delCategory(item)}/></p>
                  )
                }
                
              </div>
            </div>
            <div>
              <label htmlFor="pPrice">Product Queantity</label>
              <input {...register("queantity")} className='w-full p-[10px]' type="number" placeholder='Product Price' />
            </div>
            <div>
              <label htmlFor="pPrice">Product Category</label>
              <input {...register("category")} className='w-full p-[10px]' type="text" placeholder='Product Category' />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="pName">Product Description</label>
              <textarea {...register("description")} className='w-full p-[10px]' placeholder='Product Description'> </textarea>
            </div>
            <div>
              <label htmlFor="pPrice">Product Queantity</label>
              <input onChange={(e)=> setFiles(e.target.files[0])} className='w-full p-[10px]' type="file" placeholder='Product image' />
             
            </div>
          </div>
          <div>
            <button className='w-full p-[10px] bg-green-400 text-white'>Add Product</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateProduct
