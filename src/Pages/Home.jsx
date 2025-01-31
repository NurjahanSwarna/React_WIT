import React from 'react'
import LeatestProduct from '../Components/LeatestProduct'
import Shopex from '../Components/Shopex'
import TrandPro from '../Components/TrandPro'
import Unique from '../Components/Unique'
import Discount from '../Components/Discount'
import TopCetagories from '../Components/TopCetagories'
import Subscribe from '../Components/Subscribe'
import Leatest from '../Components/Leatest'
import Hero from '../Components/Hero'
import Featured from '../Components/Featured'
import CommonImg from '../Components/CommonImg'
import { Link } from 'react-router-dom'

const Home = () => {

  const token = JSON.parse(localStorage.getItem('token'));

  return (
    <>
   {
    token ? 
    <>
    <Hero/>
   <Featured/>
   <LeatestProduct/>
  <Shopex/>
  <Unique/>
  <TrandPro/>
  <Discount/>
   <TopCetagories/>
   <Subscribe/>
   <CommonImg/>
   <Leatest/>
    </>
    :
    <div className="">
      <h2>You are not logged in</h2>
      <Link to='/Login'>Login</Link>
    </div>
   }
    
    </>
  )
}

export default Home