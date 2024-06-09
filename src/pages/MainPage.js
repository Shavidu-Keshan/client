import React from 'react'

export default function MainPage() {
  return <div>
    <h1 className="lg:mx-32 text-5xl font-bold text-green-500"> Convert Your Currencies Today</h1>
    <p className=' lg:mx-32 opacity-40 py-6'>CurrencyConvert is a versatile currency exchange app designed for travelers, shoppers, and professionals. It offers real-time exchange rates, historical data, and offline mode, providing accurate and hassle-free currency conversions. With a user-friendly interface and multi-currency support, it helps users make informed financial decisions globally.</p>
    
    <div>
       <section>
        <form>
            <div>
                <label htmlFor="">date</label>
                <input type='date'/>
            </div>
        </form>

        </section> 
    </div>
  </div>
}
