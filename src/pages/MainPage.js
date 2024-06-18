import React ,{useState}from 'react'

export default function MainPage() {
  // states for the four fild
  //field
  return <div>
    <h1 className="lg:mx-32 text-5xl font-bold text-green-500"> Convert Your Currencies Today</h1>
    <p className=' lg:mx-32 opacity-40 py-5'>CurrencyConvert is a versatile currency exchange app designed for travelers, shoppers, and professionals. It offers real-time exchange rates, historical data, and offline mode, providing accurate and hassle-free currency conversions. With a user-friendly interface and multi-currency support, it helps users make informed financial decisions globally.</p>
    
    <div className='mt-5 flex items-center justify-center flex-col'>
       <section className='w-full lg:w-1/2'> 
        <form>
            
    <div className="mb-4">
    <label htmlFor="" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Date</label>
    <input type="Date" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" 
    placeholder="name@flowbite.com" required />
  </div>

  <div className="mb-4">
    <label htmlFor="" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Source currency</label>
    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" 
    name=''
    id=""
    >
      <option value="">Select Source currency</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Target currency</label>
    <select className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" 
    name=''
    id=""
    >
      <option value="">Select target currency</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Amount in source currency</label>
    <input type="text" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" 
    placeholder="Amount in source currency" required />
  </div>
  <button className='bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md'>Get the target currency</button>
            
        </form>

        </section> 
    </div>
  </div>
}

