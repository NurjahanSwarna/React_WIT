

import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem , increment ,decrement ,clearCart} from './Slices/CurtSlice';
import { Link } from 'react-router-dom';

export const Curt = () => {

    let data = useSelector((state)=>state.CurtItemManager.cartItems);
   
    let dispatch = useDispatch()

    const handleDelete = (index) =>{
        dispatch(deleteItem(index))
    }
    const handleIncrement = (index) =>{
        dispatch(increment(index))
    }
    const handleDecrement = (index) =>{
        dispatch(decrement(index))
    }
    const deleteAllCart = () =>{
        dispatch(clearCart())
    }
    let sum = 0;
    for(let i = 0; i < data.length; i++){
        let item = data[i];
        sum +=(item.price * item.qty);
    }
    
  return (
     <>
        <section className='py-24'>
            <div className="container mx-auto">
              {
                data.length > 0 ?   <div className="flex justify-between">
                <div className="w-[63%]">
                    <div className=" flex items-center justify-between pb-11">
                        <div className="w-2/5"><h3 className='font-josef text-xl  font-bold text-[#1D3178]'>Product</h3></div>
                        <div className="w-2/4 text-center"><h3 className='font-josef text-xl  font-bold text-[#1D3178]'>Price</h3></div>
                        <div className="w-2/4 text-center"><h3 className='font-josef text-xl  font-bold text-[#1D3178]'>Quantity</h3></div>
                        <div className="w-2/4 text-center"><h3 className='font-josef text-xl  font-bold text-[#1D3178]'>Total</h3></div>
                    </div>

                    {data.map((item , index)=>(
                        <div key={item.id} className="flex items-center justify-between border-b-2 pb-3 mb-5 ">
                        <div className="w-2/5 flex items-center gap-x-5">
                            <div className=" relative bg-slate-300">
                              <img src={item.thumbnail} alt="" className='w-20 h-20 '  />
                                <div onClick={()=>handleDelete(index)} className=" absolute w-5 h-5 bg-black rounded-full flex justify-center items-center -top-2 -right-2 ">
                                <RxCross2  className='text-white'/>
                                </div>
                            </div>
                            <div className="">
                                <h4 className='font-josef text-black text-base font-bold'>{item.title}</h4>
                                <h5 className='font-josef text-xs text-[#A1A8C1] font-medium'>Color:Brown</h5>
                                <h5 className='font-josef text-xs text-[#A1A8C1] font-medium'>Size:XL</h5>
                            </div>                            
                        </div>

                        <div className="w-2/4 text-center">
                            <h4 className='font-josef text-base text-[#15245E] font-bold'>{item.price}</h4>
                        </div>
                        <div className="w-2/4 flex justify-center items-center font-bold ">
                            <div onClick={()=>handleDecrement(index)} className="px-3 py-1 bg-slate-300">-</div>
                            <div className="px-6 py-1 bg-slate-200">{item.qty}</div>
                            <div onClick={()=>handleIncrement(index)} className="px-3 py-1 bg-slate-300">+</div>
                        </div>
                        <div className="w-2/4 text-center">
                        <h4 className='font-josef text-base text-[#15245E] font-bold'>{(item.price * item.qty).toFixed(2)}</h4>
                        </div>
                    </div>
                    ))}
                    
                    <div className=" flex justify-between pt-10 ">
                            <button className='font-josef text-white text-base font-semibold py-2 px-7 rounded bg-[#FB2E86]'>Update Curt</button>
                            <button onClick={ deleteAllCart} className='font-josef text-white text-base font-semibold py-2 px-7 rounded bg-[#FB2E86]'>Clear Curt</button>
                     </div>
                </div>
                <div className="w-[30%]">
                    <div className=""><h3 className='font-josef text-xl  font-bold text-[#1D3178] text-center mr-20'>Cart Totals</h3></div>
                    <div className="w-96 bg-[#F4F4FC] mt-9 p-8">
                        <div className="flex justify-between border-b-2 mb-10 pb-3">
                            <h4 className='text-lg font-lato font-semibold text-[#1D3178]'>Subtotals:</h4>
                            <h4 className='font-lato font-medium text-[#15245E]'>{sum.toFixed(2)}</h4>
                        </div>
                        <div className="flex justify-between border-b-2 mb-10 pb-3">
                        <h4 className='text-lg font-lato font-semibold text-[#1D3178]'>Totals:</h4>
                        <h4 className='font-lato font-medium text-[#15245E]'>{sum.toFixed(2)}</h4>
                        </div>
                        <div className="flex gap-2 mb-9">
                            <input type="checkbox"  />
                           <p className='text-sm font-semibold text-[#8A91AB]'>Shipping & taxes calculated at checkout</p>
                        </div>
                        <div className="">
                            <button className='font-lato font-bold text-white bg-[#19D16F] w-full py-3  rounded-md'>Proceed To Checkout</button>
                        </div>
                    </div>
                    <div className=" ">
                        <div className=" mt-9">
                           <h3 className='font-josef text-xl font-bold text-[#1D3178] text-center mr-20'>Cart Totals</h3>
                        </div>
                        <div className="w-96 bg-[#F4F4FC] mt-9 p-8">
                           {/* <div className=""> */}
                            <input type="text" placeholder='Bangladesh' className='text-[#C5CBE3] bg-transparent font-josef text-xl outline-none border-b-2 mb-10 pb-2 w-full' />
                            <div className="mb-10">
                               <input type="text" placeholder='Mirpur Dhaka - 1200' className='text-[#C5CBE3] bg-transparent font-josef text-xl outline-none border-b-2 pb-2  w-full' />
                            </div>
                            <div className="mb-10">
                               <input type="text" placeholder='Postal Code' className='text-[#C5CBE3] bg-transparent font-josef text-xl outline-none border-b-2 pb-2  w-full' />
                            </div>
                            <button className='text-[#FFFFFF] bg-[#FB2E86] py-2 px-6 font-bold font-josef rounded-sm'>Calculate Shiping</button>
                           {/* </div> */}
                        </div>

                    </div>
                </div>
            </div>
            
            :
            <div className="flex justify-center items-center text-center gap-3">
                <h2 className='text-4xl text-black font-bold font-josef'>Cart is Empty</h2>
                <Link className='text-3xl text-blue-500 font-bold hover:text-blue-600' to='/shop'>Go to Shop</Link>
            </div>
              }
            </div>
        </section>
    </>
    
  )
}
