import Leatest1 from '../assets/least1.png'
import { FaPenNib } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const Leatest = () => {
  return (
   <section>
        <div className="container mx-auto">
            <div className="">
                <h2 className='font-josef font-bold text-[42px] text-[#151875] text-center mt-14 mb-20'>Leatest Blog</h2>
                <div className="w-[1214px]  mx-auto  flex justify-center items-center gap-14">
                    <div className="w-[370px] h-[600px] ">
                        <img src={Leatest1} alt="" />
                        <div className="bg-[#FFFFFF] shadow-lg px-4">
                        <div className=" flex items-start justify-start  gap-10 mt-3">
                                <div className="flex  items-center gap-2">
                                    <FaPenNib className='text-[red] w-3 h-3' />
                                    <p className='font-josef font-bold text-[14px] text-[#151875]'>SaberAli</p>
                                </div>
                                <div className="flex  items-center gap-2">
                                    <MdDateRange  className='text-[red] w-3 h-3'/>
                                    <p className='font-josef font-bold text-[14px] text-[#151875]'>21 August,2020</p>
                                </div>
                        </div>

                        <h2 className='font-josef font-bold text-[18px] text-[#151875] mt-5 mb-4'>Top esssential Trends in 2021</h2>
                        <p className='font-bold font-lato text-[16px] leading-8 text-[#72718F] w-[297px] h-[60px]'>More off this less hello samlande lied much
                        over tightly circa horse taped mightly</p>

                  <button><p className='mt-14 font-lato text-[16px] w-20 h-8 text-[#151875] underline font-bold' href="#">Read More</p></button>
                  </div>
                    </div>
                    <div className="w-[370px] h-[600px] ">
                        <img src={Leatest1} alt="" />
                        <div className="bg-[#FFFFFF] shadow-lg px-4">
                        <div className=" flex items-start justify-start  gap-10 mt-3">
                                <div className="flex  items-center gap-2">
                                    <FaPenNib className='text-[red] w-3 h-3' />
                                    <p className='font-josef font-bold text-[14px] text-[#151875]'>Surfauxion</p>
                                </div>
                                <div className="flex  items-center gap-2">
                                    <MdDateRange  className='text-[red] w-3 h-3'/>
                                    <p className='font-josef font-bold text-[14px] text-[#151875]'>21 August,2020</p>
                                </div>
                        </div>
                        <h2 className='font-josef font-bold text-[18px] text-praimary mt-5 mb-4'>Top esssential Trends in 2021</h2>
                        <p className='font-bold font-lato text-[16px] leading-8 text-[#72718F] w-[297px] h-[60px]'>More off this less hello samlande lied much
                        over tightly circa horse taped mightly</p>
                  <button><p className='mt-14 font-lato text-[16px] w-20 h-8 text-praimary underline font-bold' href="#">Read More</p></button>
                  </div>
                    </div>

                    <div className="w-[370px] h-[600px]  ">
                        <img src={Leatest1} alt="" />
                        <div className="bg-[#FFFFFF] shadow-lg px-4">
                        <div className=" flex items-start justify-start  gap-10 mt-3">
                                <div className="flex  items-center gap-2">
                                    <FaPenNib className='text-[red] w-3 h-3' />
                                    <p className='font-josef font-bold text-[14px] text-[#151875]'>SaberAli</p>
                                </div>
                                <div className="flex  items-center gap-2">
                                    <MdDateRange  className='text-[red] w-3 h-3'/>
                                    <p className='font-josef font-bold text-[14px] text-[#151875]'>21 August,2020</p>
                                </div>
                        </div>
                        <h2 className='font-josef font-bold text-[18px] text-[#151875] mt-5 mb-4'>Top esssential Trends in 2021</h2>
                        <p className='font-bold font-lato text-[16px] leading-8 text-[#72718F] w-[297px] h-[60px]'>More off this less hello samlande lied much
                        over tightly circa horse taped mightly</p>

                  <button><p className='mt-14 font-lato text-[16px] w-20 h-8 text-[#151875] underline font-bold' href="#">Read More</p></button>
                  </div>
                    </div>
                    <div className=""></div>

                    <div className=""></div>
                </div>

            </div>
        </div>
   </section>
  )
}

export default Leatest