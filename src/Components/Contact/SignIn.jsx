import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";


const SignIn = () => {

  const auth = getAuth();
  const navigate = useNavigate();

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
    setEmailError('This field is not required')
  }
  if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    setEmailError('Invalid email address')
  }
  if(!password){
    setPasswordError('This field is not required')
  }
  // if(!/(?=.*[a-z])/.test(password)){
  //   setPasswordError('Password should contain at the least one lowerCase latter')
  // }
  // else if(!/(?=.*[A-Z])/.test(password)){
  //   setPasswordError('Password should contain at the least one upperCase latter')
  // }
  // else if(!/(?=.*[0-9])/.test(password)){
  //   setPasswordError('Password should contain at  least 1 numeric characterr')
  // }
  // else if(!/(?=.*[!@#$%^&*])/.test(password)){
  //   setPasswordError('The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict')
  // }
  // else if(!/(?=.{8,})/.test(password)){
  //   setPasswordError('	The string must be eight characters or longer')
  // }
  if(password && email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    createUserWithEmailAndPassword(auth, email, password)
     .then(() => {
      sendEmailVerification(auth.currentUser)
      .then(() => {
        navigate('/Login')
      
  });
    
  })
  .catch((error) => {
    const errorCode = error.code;
   if(errorCode.includes('auth/email-already-in-use')){
    setEmailError('Email already in use . Please enter your email')
   }
   
  });
  }
  
 
 }
 
  
  return (

    <>
    <section className='py-20'>
      
      <div className="container mx-auto flex items-center justify-center"> 
        <div className="w-2/5 shadow-lg py-10 px-14">
          <h2 className='font-josef text-3xl font-bold text-[#000000] pb-2 text-center'>Sign Up</h2>
          <p className='font-lato font-normal text-[17px] text-[#9096B2] pb-9 border-[#9096B2] text-center'>Please Sign Up using account detail bellow.</p>
        
      
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
          <button onClick={handleSubmit} type='submit' className='w-full font-lato text-base font-bold
           text-white py-3 rounded bg-praimary cursor-pointer'>Sign UP</button>
      
        </div> 
      </div>
    </section>
    </>    

  )
}

export default SignIn