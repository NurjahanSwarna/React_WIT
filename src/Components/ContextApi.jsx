import axios from "axios";
import { createContext , useEffect, useState } from "react";


const apiData = createContext();

const ContextApi = ({children}) => {

    let [apiInfo , setapiInfo] = useState([]);
    

   useEffect(()=>{
    axios.get('https://dummyjson.com/products?limit=0')
    .then((res)=>setapiInfo(res.data.products));

   }, []);


  return (
    <>
    <apiData.Provider value={apiInfo}> {children} </apiData.Provider>
    </>

  )
}

export {apiData  , ContextApi}