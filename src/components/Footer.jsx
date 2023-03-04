import React from 'react'
import { FaEnvelope, FaLocationArrow, FaMap, FaSearchLocation } from 'react-icons/fa'

function Footer() {
  return (
   <div className='w-screen h-[60vh]'>

    <div className='flex w-[80%] mx-auto justify-between pt-12'>
        <div className='font-heading text-3xl font-extrabold'>
            ARTSY.
           
        </div>
        <div className='flex flex-col font-body text-xl'>
            <a href="" className='p-4 hover:underline '>Home</a>
            <a href=""  className='p-4 hover:underline '>Marketplace</a>
            <a href=""  className='p-4 hover:underline '>Auctions</a>
            <a href=""  className='p-4 hover:underline '>Drops</a>
        </div>

        <div className='flex flex-col font-body text-xl'>
            <a href="" className='p-4 hover:underline '>Blog</a>
            <a href=""  className='p-4 hover:underline '>Wallets</a>
            <a href=""  className='p-4 hover:underline '>Rates</a>
            <a href=""  className='p-4 hover:underline '>High bids</a>
        </div>

        <div className='flex flex-col font-body text-xl'>
           <p className='flex justify-between'><FaEnvelope className='text-4xl px-2'/> <span>artsystudios@gmail.com</span> </p>

           <p className='flex'><FaLocationArrow className='text-4xl px-2'/> <span>Lagos, Nigeria.</span> </p>

        </div>

    </div>
      <div  className='flex w-[80%] mx-auto justify-center py-4'>
        <p className='text-[1em] text-gray-300 font-body font-semibold '>Artsystudios 2022. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
