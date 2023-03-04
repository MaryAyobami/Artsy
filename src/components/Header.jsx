import React, { useState } from 'react'
import {FaSearch, FaShoppingCart, FaBell , FaBars, FaTimes} from 'react-icons/fa'


function Header() {

  const [nav , setNav] = useState(false)
  return (
    <div className='w-screen bg-gray-50'>
    <div className='flex justify-between w-[98%] mx-auto p-8 font-serif '>
      <div className='lg:hidden block ' onClick={()=>setNav(!nav)}>
        <FaBars className='text-3xl'/>
      </div>
      <div>
        <h1 className='text-2xl font-semibold'>ARTSY.</h1>
      </div>
       <div className={nav ? 'fixed w-screen h-screen top-0 left-0 flex flex-col p-8  bg-white z-10 duration-300 items-start font-body ' : 'hidden lg:block w-[38%] font-body text-xl' }>
        
        <div className={nav ? 'w-[100%] pb-8 pt-2 flex justify-between' : ' hidden'}>
          <h1 className='text-2xl font-serif font-semibold'>ARTSY.</h1>
          <span onClick={()=> setNav(false)} className='text-3xl cursor-pointer'><FaTimes/></span>
         </div>

         <div className={ nav? 'flex flex-col h-[40vh] pt-4 justify-between font-semibold' : ' flex justify-between'}>
          <a href="/" className={nav? ' ' :'hover:underline active:font-semibold active:underline'}>Home</a>
          <a href="/marketplace" className={nav? ' ' :'hover:underline active:font-semibold active:underline'}>Marketplace</a>
          <a href="/autions" className={nav? ' ' :'hover:underline active:font-semibold active:underline'}>Auctions</a>
          <a href="/drop" className={nav? ' ' :'hover:underline active:font-semibold active:underline'}>Drop</a>
         </div>
       </div>
      <div className=' lg:w-[8%] flex justify-between '>
        <FaSearch className=' text-xl lg:text-2xl'/>
        <FaShoppingCart  className='text-xl lg:text-2xl'/>
        <FaBell className= 'hidden lg:block text-2xl'/>
      </div>
    </div>
    </div>

  )
}

export default Header
