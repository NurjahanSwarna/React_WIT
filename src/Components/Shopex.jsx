import React from 'react'
import Shopex1 from '../assets/Shopex1.png'
import Shopex2 from '../assets/Shopex2.png'
import Shopex3 from '../assets/Shopex3.png'
import Shopex4 from '../assets/Shopex4.png'

const Shopex = () => {
  return (
    <>
    <section>
        <div className="container mx-auto">
            <div className="">
                <h2 className='font-josef font-bold text-[25px] text-[#151875] text-center pb-14'>What Shopex Offer!</h2>
                <div className="flex justify-center items-center gap-7">
                    <div className="w-[270px] h-[300px]  text-center shadow-[0px 8px 40px 0px #31208A0D] ">
                        <img className=' mx-auto pt-9 pb-8' src={Shopex1} alt="free-delivery" />
                        <h4 className='font-josef font-bold text-[22px] text-[#151875] pb-5'>24/7 Support</h4>
                        <p className='font-lato text-4 pb-8 text-[#1A0B5B4D] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>

                    <div className="w-[270px] h-[300px] text-center bg-[rgba(255, 255, 255, 1)] box-shadow:0px 8px 40px 0px #31208A0D">
                        <img  className=' pb-8 mx-auto pt-9 'src={Shopex2} alt="" />
                        <h4 className='font-josef font-bold text-[22px] text-[rgb(21,24,117)] pb-5'>24/7 Support</h4>
                        <p className='font-lato text-4 pb-8 text-[#1A0B5B4D] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>

                    <div className="w-[270px] h-[300px] text-center bg-[rgba(255, 255, 255, 1)] box-shadow:0px 8px 40px 0px #31208A0D">
                        <img  className=' pb-8 mx-auto pt-9 b-8'src={Shopex3} alt="" />
                        <h4 className='font-josef font-bold text-[22px] text-[#151875] pb-5'>24/7 Support</h4>
                        <p className='font-lato text-4 pb-8 text-[#1A0B5B4D] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>

                    <div className="w-[270px] h-[300px] text-center bg-[rgba(255, 255, 255, 1)] box-shadow:0px 8px 40px 0px #31208A0D">
                        <img className=' pb-8 mx-auto pt-9 b-8' src={Shopex4} alt="" />
                        <h4 className='font-josef font-bold text-[22px] text-[#151875] pb-5'>24/7 Support</h4>
                        <p className=' font-lato text-4 pb-8 text-[#1A0B5B4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Shopex