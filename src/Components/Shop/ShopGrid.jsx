import React from 'react'

const ShopGrid = () => {
  return (
   <>
   <section>
    <div className="w-full h-72 bg-[#F6F5FF]">
      <div className="container mx-auto pt-20">
        <h1 className='text-[36px] font-josef font-bold text-[#101750]'>Shop Grid Default</h1>
        <ul className='flex gap-2'>
            <li><a className='font-lato text-[17px] text-[#000000] font-medium' href="#">Home.</a></li>
            <li><a className='font-lato text-[17px] text-[#000000] font-medium' href="#">Page .</a></li>
            <li><a className='font-lato text-[17px] text-praimary font-medium' href="#">Shop Grid Default.</a></li>
        </ul>
      </div>
    </div>
   </section>
   </>
  )
}

export default ShopGrid