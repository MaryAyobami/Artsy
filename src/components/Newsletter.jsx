import React from 'react'

function Newsletter() {
  return (
    <div className='w-[90%] text-center mx-auto border py-12  border-black'>
         <h3 className='uppercase font-serif p-4 text-[1.5em]'>Newsletter</h3>
        <p className='font-body text-[1.7em] p-4'>Subscribe to get daily updates on new drops and exicting deals </p>
        <p className='flex justify-center '>
        <input type="email" name="" id="" placeholder='enter your email' className='uppercase font-serif text-black border border-black p-2 w-[30%]' />
        <button className='bg-black px-8 py-4 mx-4 text-white uppercase font-serif'>subscribe</button>
        </p>
      
    </div>
  )
}

export default Newsletter
