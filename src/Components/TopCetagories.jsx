import React from 'react'
import TopC1 from '../assets/TC1.png'

const TopCetagories = () => {
  return (
    <section>
        <div className="container mx-auto">
            <h2 className='font-serif text-center text-[35px] font-bold text-[#1A0B5B] mb-3 '>Top Categories</h2>
            <div className="">
                <div className="w-[200px] h-[245px]"> 
                    <div className=" bg-[#F6F7FB] rounded-[50%]"><img className='w-[174px]' src={TopC1} alt="" /></div>
                    <ul className='flex justify-center items-center gap-2'>
                        <li className='text-[#1A0B5B] font-josef font-normal text-[20px]'>Mini</li>
                        <li className='text-[#1A0B5B] font-josef font-normal text-[20px]'>LCW</li>
                        <li className='text-[#1A0B5B] font-josef font-normal text-[20px]'>Chair</li>
                    </ul>
                    <p className='text-center font-josef font-normal text-[16px] text-[#151875]'>$56.00</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopCetagories