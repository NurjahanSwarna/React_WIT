import React from 'react'
import L1 from '../assets/L1.png'
const LeatestProduct = () => {
  return (
    <>
    <section>
        <div className="container mx-auto">
           <h2 className='font-josef font-bold text-[25px] text-[#151875] text-center'>Leatest Products</h2>
           <div className="">
            <ul className='flex justify-center pt-[18px] pb-6 '>
                <li className='px-6 font-lato text-[18px] text-praimary'><a href="">New Arrival</a></li>
                <li className='px-6 font-lato text-[18px] text-[#151875]'><a href="">Best Seller</a></li>
                <li className='px-6 font-lato text-[18px] text-[#151875]'><a href="">Featured</a></li>
                <li className='px-6 font-lato text-[18px] text-[#151875]'><a href="">Special Offer</a></li>
            </ul>

            <div className="w-">
                <div className=" w-[360px] h-[306px]">
                    <img className='bg-[#F7F7F7] py-3 px-3' src={L1} alt="" />
                    <div className="flex justify-between">
                        <p className='font-josef text-[16px] text-[#151875]'>Comfort Handy Craft</p>
                        <div className="flex items-center gap-2">
                            <p className='font-josef text-[#151875] text-[14px]'>$42.00</p>
                            <p className='font-josef text-[12px] text-praimary'>$65.00</p>
                        </div>
                    </div>
                </div>
            </div>

           </div>
        </div>
    </section>
    </>
  )
}

export default LeatestProduct