import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {

  const auth = getAuth();
  const navigate = useNavigate()

    let [email , setEmail] = useState('');
    let [password ,setPassword] = useState('')
  
    let [emailError , setEmailError] = useState('');
    let [passwordError , setPasswordError] = useState('')
  
    const handleEmail = (e)=>{
      setEmail(e.target.value)
      setEmailError('')
    }
    const handlePassword = (e)=>{
      setPassword(e.target.value)
      setPasswordError('')
    }
    const handleSubmit = ()=>{
      if(!email){
        setEmailError('This field is  required')
      }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        setEmailError('Invalid email address')
      }
      if(!password){
        setPasswordError('This field is required')
      }
     if(email && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
     
      if(!userCredential.user.emailVerified){
        setEmailError('Email is not varified , Please check your email for verification instrucation')
      }else{
        setEmailError('');
        setTimeout(()=>{
          localStorage.setItem('token', JSON.stringify(userCredential.user.accessToken));
          alert('Login  successful');
            navigate('/')
        } , 2000)
      }
        
      })
      .catch((error) => {
        const errorCode = error.code;
        if(errorCode.includes('auth/invalid-credential')){
            setPasswordError('Invalid email and password')
        }
        
      });
     }
    
    }

  return (
   <section className='pt-24 pb-10'>
    <div className="container mx-auto flex justify-center items-center">
        <div className="w-2/5 shadow-lg py-10 px-14">
            <h2 className='font-josef text-3xl font-bold text-[#000000] pb-2 text-center'>Login</h2>
            <p className='font-lato font-normal text- text-[#9096B2] pb-9 text-base text-center'>Please login using account detail below.</p>
            
            
          <div className="pb-5">
            <input onChange={handleEmail} className='border-2 w-full py-3 pl-3 rounded 
            outline-none placeholder:text-[#9096B2] placeholder:font-normal' 
            type="email" placeholder='Email Address' required />
            {
              passwordError &&
              <p className='bg-red-600 text-white py-2 px-5 mt-2 rounded-sm'>{passwordError}</p>
            }
          </div>

          <div className=" pb-4">
            <input onChange={handlePassword} className='border-2 w-full py-3 pl-3
            rounded outline-none' type="password" placeholder='Password' required />
            {
              emailError &&    
              <p className='bg-red-600 text-white py-2 px-5 mt-2 rounded-sm'>{emailError}</p>
            }
          </div>

            <div className="font-lato font-normal text-[#9096B2] text-lg pb-5  hover:underline hover:text-praimary">
              <Link>Forgot your password?</Link>
           </div>
            <button onClick={handleSubmit} className='w-full font-lato font-bold text-white py-3 rounded bg-praimary text-xl'>Sign In</button>
            <div className="font-bold font-lato pt-7 hover:underline  text-center ">
            <Link to='/SignIn' className='text-blue-500 hover:text-praimary duration-300'>  Don’t have an Account? Create account</Link>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Login
