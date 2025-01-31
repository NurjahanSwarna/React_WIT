import React from 'react'
import Uic from '../assets/unique.png'

const Unique = () => {
  return (
  <section>
    <div className="container mx-auto ">
        <div className="mx-auto w-[1050px] h-[550]">
          <div className=" flex justify-center items-center">
            <img className='w-[558px]' src={Uic} alt="" />
            <div className="">
                <h3 className='text-[35px] text-[#151875] font-bold mb-3'>Unique Features Of leatest &
                Trending Poducts</h3>
                <ul>
                    <li className='list-disc text-[16px] font-lato text-[#ACABC3] mb-2'>All frames constructed with hardwood solids and laminates</li>
                    <li className='list-disc text-[16px] font-lato text-[#ACABC3] mb-2'>Reinforced with double wood dowels, glue, screw - nails corner 
                    blocks and machine nails</li>
                    <li className='list-disc text-[16px] font-lato text-[#ACABC3] mb-2'>Arms, backs and seats are structurally reinforced</li>
                </ul>
                <div className=" mt-5 flex gap-2">
                    <button className='bg-praimary w-[157px] h-[45px]'><h3 className='font-josef text-white text-[17px]'>Add To Cart</h3></button>
                    <div className="">
                        <p className='font-josef text-[14px] text-[#151875]'>B&B Italian Sofa </p>
                        <p className='font-josef text-[14px] text-[#151875]'>$32.00</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
    </div>
  </section>
  )
}

export default Unique