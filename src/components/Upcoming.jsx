import React from 'react'
import upcoming1 from '../assets/images/upcoming (1).jpg'
import upcoming2 from '../assets/images/upcoming (2).jpg'


function Upcoming() {
  return (
    <div className='w-screen bg-gradient-to-r from-blue-300 to-yellow-700'>

        <div className='w-[90%] mx-auto p-8'>
          <h1 className='font-body text-3xl text-white' >See Upcoming Auctions and Exhibitions</h1>
          <div className='relative'>
            <img src={upcoming1} alt="" className='w-[100%] h-[80vh] py-8 opacity-50' />
            <div className='absolute top-80 flex justify-between p-8 text-white font-body'>
              <div className='text-6xl font-semibold'>
                01
              </div>
               <div className='w-[60%] '>
               <ol className=' text-3xl mb-4 w-[50%] items-start font-semibold flex '><span className=''>.</span> <span> MONALISA REDEFINED IN STYLE.</span></ol>
                <span className='font-body py-8 text-[0.7em]'>START ON : 08.00 GTS. MONDAY</span>
                <p className='font-body uppercase'>
                   get exclusive viewing of contemporary art and connect with investors and autioneers accross the world bringing their highest and lowest bids.
                </p>
               </div>
               <div className='w-[25%] font-body flex items-end justify-between'>
                <p className='text-xl underline'>See more</p>
                <p className='text-xl border px-6 py-3 rounded-lg'>Set a reminder</p>
               </div>
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Upcoming