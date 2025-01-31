import { IoSearchOutline } from 'react-icons/io5';
import { FaAngleDown, FaBars } from 'react-icons/fa6';
import { GiCrossedSabres } from "react-icons/gi";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiData } from './ContextApi';
import nav_logo from '../assets/Hekto.png';

const Navbar = () => {
  let data = useContext(apiData);
  let [searchResult, setSearchResult] = useState([]);
  let [menuShow, setMenuShow] = useState(false);

  const handleSearch = (e) => {
    let filteredProducts = data.filter((items) =>
      items.title.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setSearchResult(filteredProducts);
    if (e.target.value === '') {
      setSearchResult([]);
    }
  };

  const handleMenu = () => {
    setMenuShow(!menuShow);
  };

  return (
    <nav className="py-5 z-50 font-lato bg-white shadow-md">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between">
       
          <div>
            <img src={nav_logo} alt="Hekto Logo" className="w-24" />
          </div>

          <div className={`lg:flex ${menuShow ? 'block' : 'hidden'} absolute lg:static top-16 left-0 bg-white w-full lg:w-auto lg:bg-transparent lg:flex-row flex-col shadow-lg lg:shadow-none`}>
            <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-5 lg:p-0">
              <li className="relative group">
                <Link to="/" className="flex items-center gap-2 hover:text-pink-500">
                  Home <FaAngleDown />
                </Link>
                <ul className="absolute left-0 top-6 hidden group-hover:block bg-white shadow-md border w-36">
                  {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((item, index) => (
                    <li key={index} className="hover:bg-gray-200 py-2 px-4">{item}</li>
                  ))}
                </ul>
              </li>
              <li><Link to="/Pages" className="hover:text-pink-500">Pages</Link></li>
              <li><Link to="/Products" className="hover:text-pink-500">Products</Link></li>
              <li><Link to="/Blog" className="hover:text-pink-500">Blog</Link></li>
              <li><Link to="/shop" className="hover:text-pink-500">Shop</Link></li>
              <li><Link to="/cont" className="hover:text-pink-500">Contact</Link></li>
            </ul>
          </div>

        
          <div className="relative flex items-center">
            <input onChange={handleSearch} type="text" className="border-2 outline-none sm:w-72 w-52 h-9 pl-8 rounded-md" placeholder="Search..." />
            <button className="absolute top-0 right-0 h-9 w-10 flex justify-center items-center bg-pink-500 rounded-r-md">
              <IoSearchOutline className="text-white text-xl" />
            </button>
            {searchResult.length > 0 && (
              <div className="absolute top-12 left-0 w-full bg-gray-200 shadow-lg rounded-md max-h-80 overflow-y-auto">
                {searchResult.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-2 border-b">
                    <img className="w-14" src={item.thumbnail} alt="" />
                    <h3>{item.title}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div onClick={handleMenu} className="lg:hidden cursor-pointer text-2xl">
            {menuShow ? <GiCrossedSabres /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
