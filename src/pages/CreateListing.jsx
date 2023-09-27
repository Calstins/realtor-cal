import {useState} from 'react'
const CreateListing = () => {
    const [formData, setFormData] = useState({
        type: "rent",
        name: "",
        bedroom: "1",
        bathroom: "1",
        parking: false,
        furnish: false,
        address: "",
        description: "",
        offer: false,
        regularPrice: 0,
        discountPrice: 0,
    })
    const {type, name, bedroom, bathroom,  parking, furnish, address, description, offer, regularPrice, discountPrice} = formData
   function onChange() {
    
   } 
  return (
    <main className='max-w-md px-2 mx-auto'>
        <h1 className='text-3xl text-center mt-6 font-bold'>Create a listing</h1>
        <form>
            <p className='text-lg mt-6 font-semibold'>Sell / Rent</p>
            <div className='flex'>
                <button 
                    type="button" 
                    id='type' value='sale' 
                    onClick={onChange} 
                    className={`w-full mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                    type ==="rent" ? "bg-white text-black" : "bg-slate-600 text-white"
                    }`}
                >
                    sell
                </button>
                <button 
                    type="button" 
                    id='type' value='rent' 
                    onClick={onChange} 
                    className={`w-full ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                    type ==="sale" ? "bg-white text-black" : "bg-slate-600 text-white"
                    }`}
                >
                    rent
                </button>
            </div>
            <p className='text-lg mt-6 font-semibold'>Name</p>
            <input 
                type="text" 
                name="name" 
                id="name" 
                value={name} 
                onChange={onChange} 
                placeholder='Property name' 
                maxLength="32" 
                minLength="10" 
                required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'
            /> 
            <div className="flex space-x-6 mb-6">
                <div>
                    <p className='text-lg font-semibold'>Beds</p>
                    <input type="number" id="bedroom" value={bedroom} onChange={onChange} min='1' required className='w-full px-4 py-2 text-xl text-gray-700 border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'/>
                </div>
                <div>
                    <p className='text-lg font-semibold'>Baths</p>
                    <input type="number" id="bathroom" value={bathroom} onChange={onChange} min='1' required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'/>
                </div>
            </div>

            <p className='text-lg mt-6 font-semibold'>Parking Spot</p>
            <div className='flex'>
                <button 
                    type="button" 
                    id='parking' 
                    value={true} 
                    onClick={onChange} 
                    className={`w-full mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                        !parking  ? "bg-white text-black" : "bg-slate-600 text-white"
                    }`}
                >
                    Yes
                </button>
                <button 
                    type="button" 
                    id='parking' value={false} 
                    onClick={onChange} 
                    className={`w-full ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                        parking ? "bg-white text-black" : "bg-slate-600 text-white"
                    }`}
                >
                    No
                </button>
            </div>
            
            <p className='text-lg mt-6 font-semibold'>Furnished</p>
            <div className='flex'>
                <button 
                    type="button" 
                    id='furnish' 
                    value={true} 
                    onClick={onChange} 
                    className={`w-full mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                        !furnish  ? "bg-white text-black" : "bg-slate-600 text-white"
                    }`}
                >
                    Yes
                </button>
                <button 
                    type="button" 
                    id='furnish' value={false} 
                    onClick={onChange} 
                    className={`w-full ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                        furnish ? "bg-white text-black" : "bg-slate-600 text-white"
                    }`}
                >
                    No
                </button>
            </div>
            
            <p className='text-lg mt-6 font-semibold'>Sell / Rent</p>
            <div className='flex'>
                <button 
                    type="button" 
                    id='type' value='sale' 
                    onClick={onChange} 
                    className={`w-full mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                    type ==="rent" ? "bg-white text-black" : "bg-slate-600 text-white"
                    }`}
                >
                    sell
                </button>
                <button 
                    type="button" 
                    id='type' value='rent' 
                    onClick={onChange} 
                    className={`w-full ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                    type ==="sale" ? "bg-white text-black" : "bg-slate-600 text-white"
                    }`}
                >
                    rent
                </button>
            </div>

            <p className='text-lg mt-6 font-semibold'>Address</p>
            <textarea 
                type="text" 
                id="address" 
                value={address} 
                onChange={onChange} 
                placeholder='Address'
                required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'
            /> 

            <p className='text-lg font-semibold'>Description</p>
            <textarea 
                type="text" 
                id="description" 
                value={description} 
                onChange={onChange} 
                placeholder='Description'
                required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'
            /> 
             
             <p className='text-lg font-semibold'>Offer</p>
            <div className='flex mb-6'>
                <button 
                    type="button" 
                    id='offer' 
                    value={true} 
                    onClick={onChange} 
                    className={`w-full mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                        !offer  ? "bg-white text-black" : "bg-slate-600 text-white"
                    }`}
                >
                    Yes
                </button>
                <button 
                    type="button" 
                    id='offer' value={false} 
                    onClick={onChange} 
                    className={`w-full ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out ${
                        offer ? "bg-white text-black" : "bg-slate-600 text-white"
                    }`}
                >
                    No
                </button>
            </div>
            <div className="flex items-center mb-6">
                <div>
                    <p className='text-lg font-semibold'>Regular Price</p>
                    <div className='flex w-full justify-center items-center space-x-6'>
                        <input 
                            type="number" value={regularPrice} id="regularPrice" onChange={onChange} required className='w-full py-2 px-4 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'
                        />
                        {type === "rent" && (
                            <div>
                                <p className='text-md w-full whitespace-nowrap'>₦ / Month</p>
                            </div>
                        )}
                    </div>
                </div>
            </div> 

            <div className="flex items-center mb-6">
                <div>
                    <p className='text-lg font-semibold'>Discounted Price</p>
                    <div className='flex w-full justify-center items-center space-x-6'>
                        <input 
                            type="number" value={discountPrice} id="discountPrice" onChange={onChange} required={offer}className='w-full py-2 px-4 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'
                        />
                        {type === "rent" && (
                            <div>
                                <p className='text-md w-full whitespace-nowrap'>₦ / Month</p>
                            </div>
                        )}
                    </div>
                </div>
            </div> 

            <div>
              <p className='font-semibold text-lg'>Images</p> 
              <p className='text-gray-600'>The first image will be the cover (maximum 6 images)</p>
              <input type="file"  id="images" onChange={onChange} accept='.jpg,.png,.jpeg' multiple required className='w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600 mb-6'/> 
            </div>
            <button type="submit" className='mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-lue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Create Listing</button>
        </form>
    </main>
  )
}

export default CreateListing