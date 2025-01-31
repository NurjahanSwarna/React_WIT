import React from 'react'
import Dis from '../assets/discount.png'

const Discount = () => {
  return (
    <section>
        <div className="container mx-auto">
            <h2 className='font-serif text-center text-[35px] font-bold text-[#1A0B5B] mb-3 '>Discount Item</h2>
            <div className="w-[1214px] mx-auto ">
            <ul className='items-center flex justify-center '>
                <li className='font-[18px] font-josef text-praimary px-3'>Wood Chair .</li>
                <li className='font-[18px] font-josef text-[#151875] px-3'>Plastic Chair</li>
                <li className='font-[18px] font-josef text-[#151875] px-3'>Sofa Colletion</li>
            </ul>
            <div className="">
                <div className=" flex justify-center items-center">
                    <div className="">
                        <h2 className='font-josef text-[35px] text-[#151875] font-bold'>20% Discount Of All Products</h2>
                        <p className='font-josef text-[21px] text-praimary'>Eams Sofa Compact</p>
                        <p className='font-lato font-normal text-[17px] leading-6 text-[#B7BACB] w-[523px] h-[49px]'>Lorem ipsum dolor sit amet,
                             consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                        <div className=" flex items-center gap-5 mt-4">
                            <div className="">
                                <p className='font-lato leading-normal text-[16px] text-[#B8B8DC] mb-2'>Material expose like metals</p>
                                <p className='font-lato leading-normal text-[16px] text-[#B8B8DC]'>Simple neutral colours.</p>
                            </div>
                            <div className="">
                                <p className='font-lato leading-normal text-[16px] text-[#B8B8DC] mb-2'>Clear lines and geomatric figures</p>
                                <p className='font-lato leading-normal text-[16px] text-[#B8B8DC]'>Material expose like metals</p>
                            </div>
                        </div>
                        <button className=' w-[200px] py-4 bg-red-500'><p className='font-josef text-white text-[17px]'>Shop Now</p></button>
                    </div>
                    <div className=""><img className='w-[690px]' src={Dis} alt="" /></div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Discount