import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    function pathMatchRoute(route) {
      if (route===location.pathname) {
        return true
      }  
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-1000'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div className="font-bold line-6 text-lg cursor-pointer" onClick={()=>navigate("/")}>
                Property<span className='text-blue-500 font-extrabold'>X</span>change
            </div>
            <div>
                <ul className='flex space-x-10'>
                  <li
                    className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                      pathMatchRoute("/") && "text-black border-b-red-500"
                    }`}
                    onClick={() => navigate("/")}
                  >
                    Home
                  </li>
                  <li 
                    className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                      pathMatchRoute('/offers') && "text-black  border-b-red-500"
                    }`} 
                    onClick={()=>navigate("/offers")}
                  >
                    Offers
                  </li>
                  <li 
                    className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                      pathMatchRoute('/sign-in') && 'text-black  border-b-blue-500'
                    }`} 
                    onClick={()=>navigate("/sign-in")}>Sign In</li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header