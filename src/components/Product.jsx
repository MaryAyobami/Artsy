import React from 'react'
import { FaRegHospital } from 'react-icons/fa'

function Product(props) {
 
  return (
    <div className='rounded-lg bg-white shadow-lg font-body h-[42vh]'>
      <img src={props.image} alt="" className='w-[100%] rounded-t-lg h-[30vh]' />
      <h3 className='p-2 uppercase'>{props.name}</h3>
      <p className='px-2 pt-4 text-xl font-bold'>${props.price}</p>
    </div>
  )
}

export default Product
