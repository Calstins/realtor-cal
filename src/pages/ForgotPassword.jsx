import React, { useState } from 'react'
import Img from '../assets/real-estate.jpg'
import { Link } from 'react-router-dom';
import GoogleAuth from '../components/GoogleAuth';
import { toast } from 'react-toastify';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const {email} = formData;
  function onChange(e) {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  async function onSubmit(e){
    e.preventDefault()
    try {
      const auth =getAuth()
      await sendPasswordResetEmail(auth, email);
      toast.success('Email was sent')
    } catch (error) {
      toast.error("Could not send reset password");
    }
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src={Img} alt="real-estate" className='w-full rounded-2xl' />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form onSubmit={onSubmit}>
            <input type="email" id="email" className='w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' value={email} onChange={onChange} placeholder='Email address'/>
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6'>Don't have an account? <Link to='/sign-up' className='text-red-600 hover:text-red-900 transition duration-200 ease-in-out ml-1' >Register</Link></p>
              <p><Link to='/sign-in' className='text-blue-600 hover:text-blue-900 transition duration-200 ease-in-out'>Sign in instead</Link></p>
            </div>
            <button type="submit" className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-medium-md hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'>Send reset email</button>
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

export default ForgotPassword