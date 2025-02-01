import React, { useContext, useEffect, useState } from 'react'; // Import useContext from React
import { apiData } from '../ContextApi';  // Ensure apiData context is correctly imported
import { FaCaretDown } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { IoIosHeart } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import {useDispatch} from "react-redux"
import {addToCard } from '../Slices/CurtSlice';
import { ToastContainer, toast } from "react-toastify";


const ShopApiContext = ({perPageByInput}) => {
  
  const data = useContext(apiData);
  // console.log(data); 

  let [category , setCategory] = useState ([]);
  useEffect(() =>{
    setCategory([...new Set(data.map((item) => item.category))])
  } , [data] ) 
    console.log(perPageByInput);
    
    
    let [categoryItems , setCategoryItems] = useState([]);

const handaleCategoryProducts = (cat) =>{
   let filteredProduct = data.filter((item) => item.category === cat)
   setCategoryItems(filteredProduct)  
}

 let [catShow ,setCatShow] = useState(false);
 let [priceShow , setPriceShow] = useState(false);
  
const handleCatShow = () =>{
  setCatShow(!catShow)
}

const handalePriceShow = () =>{
  setPriceShow(!priceShow)
}

let [priceItems , setPriceItems] = useState([]);
const handlePriceProducts = (low , high)=>{
  let filteredProduct = data.filter((item) => item.price > low && item.price <= high)
      setPriceItems(filteredProduct);
}

/ pagination/ 
 let [currentPage , setCurrentPage] = useState(1);
 let [perPage , setPerPage] = useState(30);
 let lastItemIndex = currentPage * perPage;
 let firstItemIndex = lastItemIndex - perPage;
 let totalPages = Math.ceil(data.length / perPage);
let currentPageProduct = data.slice(firstItemIndex , lastItemIndex);



useEffect(()=>{
  if(perPageByInput){
    setPerPage(perPageByInput || 30)
  }
})

 let pages = [];
  for( let i = 1; i <= totalPages; i++){
  pages.push(i)
    
  }
 
  
 const handleNextPage = ()=>{
  if( setCurrentPage !== totalPages){
    setCurrentPage(currentPage + 1)
  }
 }

 const handlePrevPage = () =>{
  if( currentPage > 1){
    setCurrentPage(currentPage - 1)
  }
 }

 const handleGoToPage = (pageNumber) =>{
      setCurrentPage(pageNumber)
 }
/ redux / 
  const dispatch = useDispatch()

 const handleAddToCard = (item)=>{
  dispatch(addToCard({...item , qty:1}))
  toast.success('Added to Cart!', {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
   
    });
 }

  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="flex gap-16  ">
            {/* Catagori items ar div */}
              <div className="pt-24">
            <div className=" w-[]">
              <div className="flex items-center gap-4 mb-5">
              <h2 onClick={handleCatShow} className='text-[#151875] font-bold text-2xl'>Shop BY Cetegory</h2>
              <FaCaretDown  className='text-[#151875]'/>
              </div>
             {catShow && 
                 <ul>
                 {category.map((categories)=>(
                 <li onClick={()=>handaleCategoryProducts(categories)} className='capitalize cursor-pointer py-3 border-b-2'>{categories}</li>
                 ))}
               </ul>
             }
            </div> 
            <div className=" w-[]">
              <div className="flex items-center gap-4">
              <h2 onClick={handalePriceShow} className='text-[#151875] font-bold text-2xl mb-5 mt-3'>Shop BY Price</h2>
              <FaCaretDown  className='text-[#151875]'/>
              </div>
             {priceShow && 
                 <ul>
                 <li onClick={()=>handlePriceProducts(0.00 , 100)} className=' capitalize cursor-pointer py-3 border-b-2'>$0.00 - $100.00</li>
                 <li onClick={()=>handlePriceProducts(100.01 , 200)} className=' capitalize cursor-pointer py-3 border-b-2'>$100.01 - $200.00</li>
                 <li onClick={()=>handlePriceProducts(200.01 , 500)} className=' capitalize cursor-pointer py-3 border-b-2'>$200.01 - $500.00</li>
                 <li onClick={()=>handlePriceProducts(500.01 , 100000.00)} className=' capitalize cursor-pointer py-3 border-b-2'>$500.01 - $100000.00</li>
               </ul>
             }
            </div> 
           </div>
            {/* Api product div */}
            <div className=" w-[70%] flex flex-wrap justify-between gap-6">

                {categoryItems.length > 0 ?
                categoryItems.map((item, index) => (
                  <div key={index} className="  mb-4 shadow-lg">
                    <div className="bg-[#F6F7FB] flex justify-center pt-16 pb-8">
                      {/* Dynamic image for each product */}
                      <img src={item.thumbnail} alt={item.name} />
                    </div>
                    <div className="text-center py-5 bg-[#FFFFFF]">
                      {/* Dynamically rendering product details */}
                      <h2 className="font-lato font-bold text-[18px] text-primary">
                        {item.title}
                      </h2>
                      <h5 className="font-serif font-normal text-[#151875] py-2">
                        {`Code - ${item.price}`}
                      </h5>
                      <p className="font-serif font-normal text-[#151875] py-2">
                        {`$${item.discountPercentage || '42.00'}`}
                      </p>
                    </div>
                  </div>
                ))
                :
                priceItems.length > 0 
                ?
                priceItems.map((item, index) => (
                  <div key={index} className="  mb-4 shadow-lg">
                    <div className="bg-[#F6F7FB] flex justify-center pt-16 pb-8">
                      {/* Dynamic image for each product */}
                      <img src={item.thumbnail} alt={item.name} />
                    </div>
                    <div className="text-center py-5 bg-[#FFFFFF]">
                      {/* Dynamically rendering product details */}
                      <h2 className="font-lato font-bold text-[18px] text-primary">
                        {item.title}
                      </h2>
                      <h5 className="font-serif font-normal text-[#151875] py-2">
                        {`Code - ${item.price}`}
                      </h5>
                      <p className="font-serif font-normal text-[#151875] py-2">
                        {`$${item.discountPercentage || '42.00'}`}
                      </p>
                    </div>
                  </div>
                ))
                :
                currentPageProduct.map((item, index) => (
              <div key={index} className="w-[30%] group mb-4 shadow-lg pb-5">
                <div className="bg-[#F6F7FB] w-full py-14 flex justify-center relative group-hover:bg-[#EBF4F3] overflow-hidden ">
                  <img className='h-44 object-cover' src={item.thumbnail} alt={item.name} />
                      
                      <div className="absolute cursor-pointer flex flex-col  items-center gap-2  left-5 -bottom-44 group-hover:bottom-5 duration-500 ease-in-out ">
                        <div onClick={()=>handleAddToCard(item ,index)} className="w-10 h-10 hover:bg-white rounded-full flex justify-center items-center"> 
                          <BsCartCheckFill  className='text-2xl text-[#151875]'/></div>
                          <ToastContainer
                            position="top-center"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                            />
                        <div className="w-10 h-10 hover:bg-white rounded-full flex justify-center items-center">
                          <IoIosHeart  className='text-2xl text-[#151875]'/></div>
                        <div className="w-10 h-10 hover:bg-white rounded-full flex justify-center items-center">
                          <IoSearchOutline className='text-2xl text-[#151875]'/></div>  
                      </div>
                </div>
                <div className="text-center py-5 bg-[#FFFFFF]">
                  <h2 className="font-lato font-bold text-[18px] text-primary">
                    {item.title}
                  </h2>
                  <h5 className="font-serif font-normal text-[#151875] py-2">
                    {`Code - ${item.price}`}
                  </h5>
                  <p className="font-serif font-normal text-[#151875] py-2">
                    {`$${item.discountPercentage || '42.00'}`}
                  </p>
                 
                </div>
              </div>
            ))}
          </div>
          </div>
          
            <div className="flex items-center justify-center gap-2 mb-20 mt-20">
              <button  onClick={handlePrevPage} className='px-4 font-bold py-2 border-3 text-base'>Privious</button>
              {pages.map((item) =>(
                <button key={item} onClick={()=>handleGoToPage(item)} className={`px-4 font-bold py-2 border-2 text-base ${item === currentPage ? "bg-black text-white" : ""}`}>{item}</button>
              ))}
           
              <button onClick={handleNextPage} className='px-5 py-2 font-bold  text-base'>Next</button>
            </div>

        </div>
      </section>
    </>
  );
};

export default ShopApiContext;
