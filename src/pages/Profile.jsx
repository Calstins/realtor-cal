import { getAuth, updateProfile } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { db } from '../firebase';

const Profile = () => {

  const auth =  getAuth();
  const navigate = useNavigate()
  const [changeDetail, setChangeDetail] = useState(false)
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
  function onChange(e) {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value
    }))
  }
  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name){
        //update displayName into firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        })
        //update name into firestore
        const docRef = doc(db, "users", auth.currentUser.uid)
        await updateDoc(docRef, {
          name: name,
        })
      }
      toast.success("Profile details updated")
    } catch (error) {
      toast.error('Could not Update the profile details')
    }
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
            className={`mb-6 w-full py-2 px-4 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-red-200 focus:bg-red-100"}` }
            disable = {!changeDetail}
            onChange={onChange}
            // onKeyDown={(e) => {
            //   if (e.key === "Enter") {
            //     e.preventDefault();
            //     onSubmit(); 
            //   }
            // }}
          />
          <input 
            type="email" 
            value={email} 
            id="email" 
            className="mb-6 w-full py-2 px-4 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            disable = {!changeDetail}
            onChange={onChange}
          />
          <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
            <p className='flex items-center'>
              Do you want to change your name? 
              <span  
                onClick={()=> {
                  changeDetail && onSubmit();
                  setChangeDetail((prevState)=> !prevState);
                }} 
                className='text-red-600  hover:text-red-500 transition ease-in-out duration-200 ml-1 cursor-pointer'
              > 
                  {changeDetail ? 'Apply Change' : 'Edit'} 
              </span>
            </p>
            <p onClick={onLogout} className='text-blue-600 hover:blue-800  transition ease-in-out duration-200 ml-1 cursor-pointer'>Sign Out</p>
          </div>
        </form>
      </div>
    </section>
    </>
  )
}

export default Profile