import React ,{useEffect, useState}from 'react'
import axios from "axios";
export default function MainPage() {
  // states for the four field
  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCureency, setTargetCurrency] = useState("");
  const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(null);
  const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(null);
  
  
  //handle submit method
  const handleSubmit = (e) => {
    e.preventDefault();
    /*console.log(
      date,
      sourceCurrency,
      targetCureency,
      amountInSourceCurrency

    )*/
  };

  //get all curencies name
  useEffect(() => {
    const getCurrencyNames = async() => {
      try{
        const responce = await axios.get(
          "http://Localhost:5000/getAllCurrencies"
        )
      } catch(err){
        console.error(err)
      }
    }
  }, [])

  return (
  <div>
    <h1 className="lg:mx-32 text-5xl font-bold text-green-500"> Convert Your Currencies Today</h1>
    <p className=' lg:mx-32 opacity-40 py-5'>CurrencyConvert is a versatile currency exchange app designed for travelers, shoppers, and professionals. It offers real-time exchange rates, historical data, and offline mode, providing accurate and hassle-free currency conversions. With a user-friendly interface and multi-currency support, it helps users make informed financial decisions globally.</p>
    
    <div className='mt-5 flex items-center justify-center flex-col'>
       <section className='w-full lg:w-1/2'> 
        <form onSubmit={handleSubmit}>
            
    <div className="mb-4">
    <label htmlFor={date} className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Date</label>
    <input 
    onChange={(e) => setDate(e.target.value)}
    type="Date" id={date} name={date} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" 
    placeholder="name@flowbite.com" required />
  </div>

  <div className="mb-4">
    <label htmlFor={sourceCurrency} className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Source currency</label>
    <select
    onChange={(e) => setSourceCurrency(e.target.value)}
     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" 
    name={sourceCurrency}
    id={sourceCurrency}
    value={sourceCurrency}
    

    >
      <option value="">Select Source currency</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor={targetCureency} className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Target currency</label>
    <select
    onChange={(e) => setTargetCurrency(e.target.value)}
     className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" 
    name={targetCureency}
    id={targetCureency}
    value={targetCureency}
    >
      <option value="">Select target currency</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor={amountInSourceCurrency} className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Amount in source currency</label>
    <input
     onChange={(e) => setAmountInSourceCurrency(e.target.value)}
    type="number" id={amountInSourceCurrency} name={amountInSourceCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" 
    placeholder="Amount in source currency" required />
  </div>
  <button  className='bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md'>Get the target currency</button>
            
        </form>

        </section> 
    </div>
  </div>
  );
}

