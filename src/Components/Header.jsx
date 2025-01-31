
// import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaUser } from "react-icons/fa"; 
// import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {

  let cartData = useSelector((state)=>state.CurtItemManager.cartItems);
  console.log(cartData);
  
  return (
   <header className=' bg-[#7E33E0] text-white font-lato py-3 text-[16px]'>
    <div className="mx-auto  container">
      <div className=" flex justify-between">
        <div className=" flex items-center gap-12">
          <div className="flex items-center gap-2">
          {/* <CiMail /> */}
          <p>mhhasanul@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
             <IoIosCall />
            <p>(12345)67890</p>
          </div>
        </div>
        <div className=" flex">
          <ul className='flex items-center gap-5'>
            <li className='flex items-center gap-2'>
              <select className='bg-transparent outline-none' name="" id="">
                <option className='bg-[#7E33E0]' value="">English <FaAngleDown /></option>
                <option className='bg-[#7E33E0]' value="">Bangla <FaAngleDown /></option>
                <option className='bg-[#7E33E0]' value="">Arabic <FaAngleDown /></option>
              </select>
            </li>
            <li className='flex items-center gap-2'>
              <select className='bg-transparent outline-none' name="" id="">
                <option  className='bg-[#7E33E0]'  value="">USD <FaAngleDown /></option>
                <option  className='bg-[#7E33E0]' value="">BDT <FaAngleDown /></option>
                <option  className='bg-[#7E33E0]' value="">EURO <FaAngleDown /></option>
              </select>
            </li>
         
            <li><Link to={'/Login'} className='flex items-center gap-2' >Login</Link></li>
             <li className='flex items-center gap-5 relative'>
              <div className="absolute -top-3 -right-4 w-7 h-6 bg-pink-600 rounded-full flex justify-center items-center">
              <span className="text-white">{cartData.length}</span>
              </div>
              <Link to="/Curt"> <FiShoppingCart className='text-[25px]' /></Link> 

              </li>             
          </ul>
        </div>
      </div>
      </div>
   </header>
  )
}

export default Header