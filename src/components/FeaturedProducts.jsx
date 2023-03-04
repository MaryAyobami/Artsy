import React from 'react'
import pic from '../assets/images/pic3.png'
import pic1 from '../assets/images/pic1.png'
import pic2 from '../assets/images/pic2.png'
import pic3 from '../assets/images/pic4.png'
import {FaArrowCircleRight} from 'react-icons/fa'

function FeaturedProducts(props) {
  return (
    <div className='py-6 flex flex-col justify-between lg:flex-row lg:h-[45vh] lg:py-12'>

        {/* image */}

        <div className=' lg:w-[50%] lg:h-[100%] px-4'>
            <img src={props.image}  alt="" className='w-[100%] h-[100%]' />
        </div>

        {/* details */}
        <div className='py-8 px-4 flex flex-col justify-between  lg:py-0  lg:px-8 lg:w-[50%]'>
            <h1 className='font-serif text-xl font-semibold hidden lg:block '>The Boolean Egyptian</h1>
            <p className='font-body leading-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iusto tempore in quos voluptate eum officiis rem nam cumque hic earum, nulla, unde aspernatur consequuntur quae deleniti sed ab impedit.</p>
           
            <div className=' flex mt-8 justify-between relative lg:mt-0 '>
            <p className='flex  relative '>
                <img src={pic1} alt="" className='rounded-full w-8 lg:w-12' />
                <img src={pic2} alt=""  className='rounded-full absolute left-6 lg:left-8 z-10  w-8 lg:w-12' />
                <img src={pic3} alt="" className='rounded-full absolute  left-12 lg:left-16 z-10  w-8 lg:w-12'/>
                <img src={pic} alt=""  className='rounded-full absolute left-16 lg:left-24 z-10  w-8 lg:w-12' />
                <img src={pic1} alt="" className='rounded-full absolute left-20 lg:left-32 z-10  w-8 lg:w-12' />
            </p>
            <p className='font-body'>
                64 major creators
            </p>
            <p className='border-2 p-4 rounded-full hidden lg:block '>
            </p>
            </div>
          
        </div>
    </div>
  )
}

export default FeaturedProducts