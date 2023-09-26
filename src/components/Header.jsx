import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
            setPageState("Profile");
          } else {
            setPageState("Sign in");
          }
        });
      }, 
[auth]);

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
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
                    className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]border-b-transparent   ${
                      pathMatchRoute("/") && "text-black  border-b-blue-500"
                    }`}
                    onClick={() => navigate("/")}
                  >
                    Home
                  </li>
                  <li 
                    className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]  ${
                      pathMatchRoute('/offers') && "text-black  border-b-blue-500"
                    }`} 
                    onClick={()=>navigate("/offers")}
                  >
                    Offers
                  </li>
                  <li 
                    className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                      (pathMatchRoute('/sign-in') ||  pathMatchRoute('/profile')) && 'text-black  border-b-blue-500 !important'
                    }`} 
                    onClick={()=>navigate("/profile")}
                  >
                    {pageState}
                  </li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header