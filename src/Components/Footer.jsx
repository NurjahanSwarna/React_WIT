import Logo from '../assets/Hekto.png'
// import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook,  } from "react-icons/fa";
const Footer = () => {
  return (
  <section>
    <div className=" mx-auto">
      <div className="w-full h-[480px] bg-[#EEEFFB] flex justify-evenly items-center">

        <div className="h-[346px] px-5 ">
          <img className='w-28 h-10 mb-8' src={Logo} alt="" />
          <div className="flex items-center shadow-lg mb-6">
            <input className='w-[330px] h-12 bg-[#FFFFFF] placeholder:text-[#8A8FB9] placeholder:text-[20px] placeholder:font-bold placeholder:pl-5 ' type="text" placeholder='Enter Email Address' />
            <button className='w-[135px] h-12 bg-praimary rounded-[5px] font-medium text-[20px] text-white -mr-6 '>Sign Up</button>
          </div>
            <h3 className='font-normal font-lato text-[20px] text-[#8A8FB9] mb-3'>Contact Info</h3>
            <h2 className='font-lato text-[20px] font-normal text-[#8A8FB9]'>17 Princess Road, London, Greater London NW1 8JR, UK</h2>
        </div> 

        <div className=" flex gap-16">
            <div className="   h-[346px] ">
              <h2 className='font-josef font-bold text-[23px] mb-10 '>Catagories</h2>
              <ul>
                <li className='mb-4'><a className='font-bold font-josef text-[18px] text-[#8A8FB9] ' href="#">Laptops & Computers</a></li>
                <li className='mb-4'><a className='font-bold font-josef text-[18px] text-[#8A8FB9] ' href="#">Cameras & Photography</a></li>
                <li className='mb-4'><a className='font-bold font-josef text-[18px] text-[#8A8FB9] ' href="#">Smart Phones & Tablets</a></li>
                <li className='mb-4'><a className='font-bold font-josef text-[18px] text-[#8A8FB9] ' href="#">Video Games & Consoles</a></li>
                <li className='mb-4'><a className='font-bold font-josef text-[18px] text-[#8A8FB9] ' href="#">Waterproof Headphones</a></li>
              </ul>
            </div>

            <div className=" h-[346px] ">
              <h2 className='font-josef font-bold text-[23px] mb-10 '>Customer Care</h2>
              <ul>
                <li className='mb-4'><a className='font-bold font-josef text-[18px] text-[#8A8FB9] ' href="#">My Account</a></li>
                <li className='mb-4'><a className='font-bold font-josef text-[18px] text-[#8A8FB9] ' href="#">Discount</a></li>
                <li className='mb-4'><a className='font-bold font-josef text-[18px] text-[#8A8FB9] ' href="#">Returns</a></li>
                <li className='mb-4'><a className='font-bold font-josef text-[18px] text-[#8A8FB9] ' href="#">Orders History</a></li>
                <li className='mb-4'><a className='font-bold font-josef text-[18px] text-[#8A8FB9] ' href="#">Order Tracking</a></li>
              </ul>
            </div>

            <div className=" h-[346px] ">
              <h2 className='font-josef font-bold text-[23px] mb-10 '>Pages</h2>
              <ul>
                <li className='mb-4'><a className='font-bold font-josef text-[18px] text-[#8A8FB9] ' href="#">Blog</a></li>
                <li className='mb-4'><a className='font-bold font-josef text-[18px] text-[#8A8FB9] ' href="#">Browse the Shop</a></li>
                <li className='mb-4'><a className='font-bold font-josef text-[18px] text-[#8A8FB9] ' href="#">Category</a></li>
                <li className='mb-4'><a className='font-bold font-josef text-[18px] text-[#8A8FB9] ' href="#">Pre-Built Pages</a></li>
                <li className='mb-4'><a className='font-bold font-josef text-[18px] text-[#8A8FB9] ' href="#">Visual Composer Elements</a></li>
                <li className='mb-4'><a className='font-bold font-josef text-[18px] text-[#8A8FB9] ' href="#">WooCommerce Pages</a></li>
              </ul>
            </div>         
        </div>
      </div>
    </div>
    <div className="w-full bg-[#E7E4F8] py-4">
      <div className=" flex justify-around items-center">
        <p className='font-semibold font-lato text-[22px] text-[#9DA0AE]'>©Webecy - All Rights Reserved</p>
        <ul className='flex items-center gap-3'>
          <li className='text-[22px]'><a href="#"><FaFacebook /></a></li>
          <li className='text-[22px]'><a href="#"><AiFillTwitterCircle /></a></li>
          <li className='text-[22px]'><a href="#"><PiInstagramLogoFill /></a></li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default Footer