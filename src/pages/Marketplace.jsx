import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Product from '../components/Product'
import {Products} from '../components/Products'
function Marketplace() {
  
    const [products, setProducts] = useState()
    useEffect(
        ()=>{
            setProducts(Products)
        }
    ,
    []
    )
  return (
   <React.Fragment>
    <div className='flex w-screen px-12 font-body bg-gray-50'>
       
        <div className='w-[30%] '>
            <div className='flex justify-around bg-gray-100 w-[55%] py-2  rounded-lg '>
              <FaSearch className='text-3xl text-gray-400 '/> <input type="text" placeholder='Search' className='bg-gray-100'/>
            </div>
            
            <div className='pt-12'>
                <h3 className='font-bold text-2xl'>Filter</h3>

                {/* filter by category */}
                <div className='py-2'>
                <p className='py-2'><span className='font-bold text-xl'>By category</span><span>^</span></p>
                <div className='py-4'>
                    <p className='flex'><input type="checkbox" name="" id="" /><p className='px-2'>Editorials</p></p>
                    <p className='flex'><input type="checkbox" name="" id="" /><p className='px-2'>Fashion</p></p>
                    <p className='flex'><input type="checkbox" name="" id="" /><p className='px-2'>Optics</p></p>
                    <p className='flex'><input type="checkbox" name="" id="" /><p className='px-2'>Ary & Museum</p></p>
                    <p className='flex'><input type="checkbox" name="" id="" /><p className='px-2'>Nature</p></p>
                </div>
                </div>
           
            {/* filter by price */}

              <div className='py-2'>
              <p className='py-2'><span className='font-bold text-xl'>By price</span><span>^</span></p>
              <div className='py-4'>
                <p>$100,00 - $150,000</p>
              </div>
              </div>

            {/* filter by artist */}
            <div className='py-2 '>
            <p><span className='py-2 text-xl font-bold'>By artist</span><span>^</span></p>
            <div className='py-4'>
                <p>All</p>
                <p>Below $100,000</p>
                <p>$100,000 - $150,000</p>
                <p>$150,000 - $200,000</p>
                <p>$200,000 - $250,000</p>
                <p>$250,000 - $300,000</p>
            </div>
            </div>

            {/* filter by collection year */}
            <div className='py-2'>
            <p className='py-2'><span>Collection year</span><span>^</span></p>
            </div>
            </div>
        </div>

  {/* list of products */}
        <div className='w-[70%]'>
    <div className='bg-white shadow-md flex justify-between p-2 rounded-lg'> <p>See 1-6 of 15 results </p>
     <select name="" id="" className='border p-2 border-black rounded-lg'>
        <option value=""> Sort by</option>
     </select>
    </div>

    <div className='pt-12 flex-1'>
        <div className='grid grid-cols-3 gap-16'>
        {Products.map((product)=>(
               <Product image={product.image} name={product.name} price={product.price}/>
            ))
        }
        </div>
    </div>
        </div>

    </div>
   </React.Fragment>
  )
}

export default Marketplace
