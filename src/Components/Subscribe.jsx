import React from 'react'
import Sub from '../assets/subscribe.png'
import CommonImg from './CommonImg'

const Subscribe = () => {
  return (
    <section className=" mb-20">
    <div className="flex flex-col items-center justify-center ">
      <div className="">
        <img className='w-full h-full' src={Sub} alt=""  />
        <div className="flex flex-col items-center justify-center -mt-72">
            <h2 className='text-lg font-medium text-blue-600'>Get Leatest Update By Subscribe
            our Newslater</h2>
            <button className='bg-praimary w-[157px] h-[45px]'><h3 className='font-josef text-white text-[17px]'>Shop Now</h3></button>
        </div>
        
        </div>     
    </div>
    <CommonImg/>
   </section>
   
  )
}

export default Subscribe