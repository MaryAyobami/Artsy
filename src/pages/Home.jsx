import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import FeaturedProducts2 from '../components/FeaturedProducts2'
import be1 from '../assets/images/BE (1).jpg'
import be2 from '../assets/images/BE (2).jpg'
import be3 from '../assets/images/BE (3).jpg'
import be4 from '../assets/images/BE (4).jpg'
import Upcoming from '../components/Upcoming'
import { FaArrowRight } from 'react-icons/fa'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='w-screen'>
      <div className='w-[90%] lg:w-[60%] mx-auto text-center'>
        <h1 className='font-heading font-bold text-3xl py-2 md:text-4xl lg:text-6xl leading-relaxed lg:leading-loose'>Photography is poetry & beautiful untold stories</h1>
         <p className='font-body lg:text-[1.5em] px-4'>
         <p>Flip through more than 10,000 vintage shots, old photographs, historic images and captures seamlessly in one place. Register to get top access</p>
         </p>

         </div>

          {/* featured products */}
         <div className='w-[90%] mx-auto py-8'>
            <h1 className='font-body text-3xl  font-semibold py-4'>Featured Products</h1>
            <hr />
            <FeaturedProducts image={be3}/>
            <hr />
            <FeaturedProducts2 image={be2}/>
            <hr />
            <FeaturedProducts image={be1}/>
            <hr />
            <FeaturedProducts2 image={be4}/>

         </div>

        {/* upcoming auctions and exhibitions */}
         <div>
            <Upcoming/>
         </div>

        
         <div className='py-8 mt-20 '>
           <div className='px-20 py-8 flex justify-between text-4xl font-body font-medium border-2 border-gray-300 border-l-0 border-r-0'>
             <p>Explore Marketplace</p>
             <FaArrowRight className='text-blue-500 w-[20%]'/>
           </div>
           <div className='px-20 py-8 flex justify-between text-4xl font-body font-medium border-2 border-gray-300 border-l-0  border-t-0 border-r-0'>
             <p>See autions</p>
             <FaArrowRight className='text-blue-500 w-[20%]'/>
           </div>
         </div>

         {/* newsletter */}
        <div>
          <Newsletter/>
        </div>

    </div>
  )
}

export default Home
