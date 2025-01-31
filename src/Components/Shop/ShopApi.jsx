import React, { createContext } from 'react'
import Sh from '../Shop/ShopApi.png'
import Dot from '../Shop/shopdot.png'
import { apiData } from './ShopContextApi'
const ShopApi = () => {
    const data =createContext(apiData);
    console.log(data);
    
  return (
   <>
    <section>
        <div className="container mx-auto">

            <div className="w-44 h-96 bg-red-600c:\Users\WALTON\Downloads\shopApi.png ">
                <div className=" w-44 h-52 bg-[#F6F7FB] flex justify-center items-center ">
                <img className='w-[150px] h-[150px] ' src={Sh} alt="" />
                </div>
                <div className=" text-center mt-3">
                <p className='font-josef font-bold text-[#151875]'>Vel elit euismod</p>
                <div className=" flex justify-center items-center mt-2 mb-2">
                 <img  src={Dot} alt="" />
                </div>
                 <div className="flex justify-center items-center gap-3">
                    <p className='text-[14px] font-josef font-semibold text-[#151875]'>$26.00 </p>
                    <p className='text-[14px] font-josef font-semibold text-praimary'>$42.00</p>
                 </div>
                </div>
            </div>

        </div>
    </section>
   </>
  )
}

export default ShopApi