import Tr1 from '../assets/trand1.png'
import Tr2 from '../assets/trand2.png'
import Tr3 from '../assets/trand3.png'
import Tr4 from '../assets/trand4.png'
import Tr5 from '../assets/trand5.png'
import Tr6 from '../assets/trand6.png'
import Tr7 from '../assets/trand7.png'
import Tr8 from '../assets/trand8.png'
import Tr9 from '../assets/trand9.png'
const TrandPro = () => {
  return (
    <>
 <section>
    <div className="container w-[1214px] mx-auto">
        <div className="">
            <h2 className='font-josef font-bold text-[25px] text-[#151875] text-center pb-14'>Trending Products</h2>
            <div className=" flex justify-center items-center gap-4">

                <div className=" w-[270px] h-[260px] text-center  bg-cyan-400 shadow-[0px 8px 40px 0px #31208A0D] ">
                    <img className='bg-[#F5F6F8]  w-[197px] h-[189px] mx-auto'  src={Tr1} alt="" />
                    <h5 className='font-lato text-[16px] text-[#151875] pt-3'>Cantilever chair</h5>
                    <div className="flex gap-1 justify-center pt-1">
                        <p className='font-josef text-[14px] text-[#151875] '>$26.00 </p>
                        <p className='text-[#1518754D] text-[12px] line-through'>$42.00</p>
                    </div>
                </div>
                <div className=" w-[270px] h-[260px] text-center  bg-cyan-400">
                    <img className='bg-[#F5F6F8]  w-[197px] h-[189px] mx-auto'  src={Tr2} alt="" />
                    <h5 className='font-lato text-[16px] text-[#151875] pt-3'>Cantilever chair</h5>
                    <div className="flex gap-1 justify-center pt-1">
                        <p className='font-josef text-[14px] text-[#151875] '>$26.00 </p>
                        <p className='text-[#1518754D] text-[12px] line-through'>$42.00</p>
                    </div>
                </div>
                <div className=" w-[270px] h-[260px] text-center">
                    <img className='bg-[#F5F6F8]  w-[197px] h-[189px] mx-auto'  src={Tr3} alt="" />
                    <h5 className='font-lato text-[16px] text-[#151875] pt-3'>Cantilever chair</h5>
                    <div className="flex gap-1 justify-center pt-1">
                        <p className='font-josef text-[14px] text-[#151875] '>$26.00 </p>
                        <p className='text-[#1518754D] text-[12px] line-through'>$42.00</p>
                    </div>
                </div>
                <div className=" w-[270px] h-[260px] text-center  bg-cyan-400">
                    <img className='bg-[#F5F6F8]  w-[197px] h-[189px] mx-auto'  src={Tr4} alt="" />
                    <h5 className='font-lato text-[16px] text-[#151875] pt-3'>Cantilever chair</h5>
                    <div className="flex gap-1 justify-center pt-1">
                        <p className='font-josef text-[14px] text-[#151875] '>$26.00 </p>
                        <p className='text-[#1518754D] text-[12px] line-through'>$42.00</p>
                    </div>
                </div>
               
            </div>
           <div className="container w-[1214px] mx-auto">
            <div className=" flex items-center gap-7 mt-10">
                <div className="w-[420px] h-[270px] bg-pink-300 p-5">
                    <h4 className='font-josef font-bold text-[26px] text-[#151875]'>23% off in all products</h4>
                    <div className="flex justify-between ">
                        <h5 className='font-lato text-praimary text-[16px]'>Shop Now</h5>
                        <img className='w-[213px]' src={Tr5} alt="" />
                    </div>
                </div>
                <div className="w-[420px] h-[270px] bg-[#EEEFFB] p-5">
                    <h4 className='font-josef font-bold text-[26px] text-[#151875]' >23% off in all products</h4>
                    <div className="flex justify-between">
                    <h5 className='font-lato text-praimary text-[16px]'>View Collection</h5>
                    <img className='w-[312px]' src={Tr6} alt="" />
                    </div>
                </div>
                <div className="">
                    <div className="bg-red-400 w-[270px] h-20 flex justify-evenly items-center mb-3">
                       <div className=" w-24 h-16 bg-[#F5F6F8]"><img className='w-16 h-16 bg-' src={Tr7} alt="" /> </div>
                        <div className=" ">
                            <p className='font-josef text-[16px] text-[#151875]'>Executive Seat chair</p>
                            <p className='font-josef text-[16px] text-[#151875]'>$32.00</p>
                        </div>
                    </div>
                    <div className="bg-red-400 w-[270px] h-20 flex justify-evenly items-center mb-3">
                       <div className=" w-24 h-16 bg-[#F5F6F8]"><img className='w-16 h-16 bg-' src={Tr8} alt="" /> </div>
                        <div className=" ">
                            <p className='font-josef text-[16px] text-[#151875]'>Executive Seat chair</p>
                            <p className='font-josef text-[16px] text-[#151875]'>$32.00</p>
                        </div>
                    </div>
                    <div className="bg-red-400 w-[270px] h-20 flex justify-evenly items-center mb-3">
                       <div className=" w-24 h-16 bg-[#F5F6F8]"><img className='w-16 h-16 bg-' src={Tr9} alt="" /> </div>
                        <div className=" ">
                            <p className='font-josef text-[16px] text-[#151875]'>Executive Seat chair</p>
                            <p className='font-josef text-[16px] text-[#151875]'>$32.00</p>
                        </div>
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

export default TrandPro