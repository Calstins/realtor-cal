import { getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router';


const Profile = () => {

  const auth =  getAuth();
  const navigate = useNavigate()
  const [formData, setFormData] = useState(
    {
      name: auth.currentUser.displayName,
      email: auth.currentUser.email
    }
  )
  const {name, email} = formData 
  function onLogout() {
    auth.signOut()
    navigate('/')
  }

  return (
    <>
    <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
      <h1 className='text-3xl text-center mt-6 fond-bold '>My Profile</h1>
      <div className='w-full md:w-[50%] mt-6 px-3'>
        <form>
          <input 
            type="text" 
            value={name} 
            id="name" 
            className='mb-6 w-full py-2 px-4 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out' 
            disable
          />
          <input 
            type="email" 
            value={email} 
            id="email" 
            className='mb-6 w-full py-2 px-4 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out' 
            disable
          />
          <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
            <p className='flex items-center'>Do you want to change your name? <span className='text-red-600  hover:text-red-500 transition ease-in-out duration-200 ml-1 cursor-pointer'> Edit</span></p>
            <p onClick={onLogout} className='text-blue-600 hover:blue-800  transition ease-in-out duration-200 ml-1 cursor-pointer'>Sign Out</p>
          </div>
        </form>
      </div>
    </section>
    </>
  )
}

export default Profile