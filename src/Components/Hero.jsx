
import Hero_site from '../assets/hero_2.png'
import hero_1 from '../assets/hero1.png'

const Hero = () => {
  return (
    <section className='bg-[#F2F0FF] py-28 relative overflow-hidden z-20'>
      <img  className='absolute -top-12 left-0 -z-10 w-[300px]' src={hero_1} alt="" />
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-[60%]">
            <h4 className='font-lato text-[16px] font-bold text-praimary pb-3'>Best Furniture For Your Castle....</h4>
            <h1 className='font-josef font-bold text-[56px]  '>New Furniture Collection Trends in 2024</h1>
            <p className='font-josef text-[20px] text-[ #8A8FB9] pr-64 pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            in phasellus non in justo.</p>
            <button className='font-josef font-semibold text-[17px] text-white bg-praimary py-4 px-10'>Shop Now</button>
          </div>
          <div className=" w-[40%]">
            <img className='w-[full]' src={Hero_site} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero