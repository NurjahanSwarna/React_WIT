
import { AiOutlineBars } from "react-icons/ai";
import { MdWindow } from "react-icons/md";
import ShopApiContext from "./ShopApiContext";
import { useState } from "react";

const Acceroies = () => {

    let [inputPerPage , setInputPerPage] = useState('');
   

const handlePerPage = (e) =>{
   
   if(e.target.value){
    setInputPerPage(parseInt(e.target.value))
   }

  
   
}

  return (
    <section>
    <div className="container mx-auto">
        <div className=" flex justify-between py-28">
            <div className="">
                <h3 className='text-2xl font-josef pb-2 font-bold text-[#151875]'>Ecommerce Acceories & Fashion item </h3>
                <p className='font-lato font-normal text-[12px] text-[#8A8FB9]'>About 9,620 results (0.62 seconds)</p>
            </div>
            
                <div className="flex items-center gap-4">
                    <h4  className='font-lato font-bold text-[16px] text-[#3F509E]'>Per Page:</h4>
                    <input  onChange={handlePerPage} className='w-16 h-8  border-2 border-[#E7E6EF] outline-none pl-5 ' type="" />
                </div>
                <div className="flex items-center gap-2">
                    <h3 className="font-lato text-base text-[#3F509E]">Sort By:</h3>
                    <select name="" id=" " className="text:sm font-lato text-[#8A8FB9] w-32 h-8 border-[#E7E6EF] ">
                        <option value="">Best Match</option>
                        <option value="">Most popular</option>
                        <option value="">Featured</option>
                    </select>
                </div>
                <div className="flex items-center gap-3">
                    <h4 className='font-lato font-bold text-[16px]  text-[#3F509E]'>View:</h4>
                    <AiOutlineBars className='text-[#3F509E]'/>
                    <MdWindow className='text-[#3F509E]'/>
                    <input className='w-36 h-8 border-2 border-[#E7E6EF]' type="text" />
                </div>
                <div className="">
                </div>
            
        </div>
        <div className="">
            <ShopApiContext perPageByInput={inputPerPage}/>
        </div>
    </div>
   </section>
  )
}

export default Acceroies