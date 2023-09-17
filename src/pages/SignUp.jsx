import React, { useState } from 'react'
import Img from '../assets/real-estate.jpg'
import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai"
import { Link } from 'react-router-dom';
import GoogleAuth from '../components/GoogleAuth';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })
  const {firstname, lastname, email, password} = formData;
  function onChange(e) {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign Up</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src={Img} alt="real-estate" className='w-full rounded-2xl' />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
            <div className='flex justify-between w-full'>
            <input 
              type="text" 
              id="firstname" 
              className='w-1/2 mb-6 px-4 py-2 mr-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
              value={firstname} 
              onChange={onChange} 
              placeholder='First name'
            />
            <input 
              type="text" 
              id="lastname" 
              className='w-1/2 mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
              value={lastname} 
              onChange={onChange} 
              placeholder='Last name'
            />
            </div>
            <input 
              type="email" 
              id="email" 
              className='w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
              value={email} 
              onChange={onChange} 
              placeholder='Email address'/>
            <div className='relative mb-6'>
              <input 
                type={showPassword ? "text" : "password"} id="password" 
                className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
                value={password} 
                onChange={onChange} 
                placeholder='Password'
              />
              {
                showPassword ? (
                <AiOutlineEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState)}/>
                ) : (
                <AiOutlineEye className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState)}/>
                )
              }
            </div>
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6'>
                Have an account? <Link to='/sign-in' className='text-red-600 hover:text-red-900 transition duration-200 ease-in-out ml-1' >Sign In</Link>
              </p>
              <p>
                <Link to='/forgot-password' className='text-blue-600 hover:text-blue-900 transition duration-200 ease-in-out'>Forgot Password?</Link>
              </p>
            </div>
            <button type="submit" className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-medium-md hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'>Sign Up</button>
            <div className='flex my-4 items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
            <p className='text-center font-semibold mx-4'>OR</p>
          </div>
          <GoogleAuth />
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignUp