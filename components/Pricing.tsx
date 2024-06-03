import React from 'react'

const Pricing =()=> {
  return (
    <div className="container mx-auto px-4 py-8 mb-11">
      <h1 className="text-5xl font-bold mt-6 mb-6">Pricing & Subscription</h1>
      <div className="flex justify-center gap-6">
        <div className="max-w-lg w-full bg-white shadow-md rounded-lg overflow-hidden">
          <div className="py-4 px-6 bg-green-500 text-white text-center font-bold uppercase">
            Basic Plan
          </div>
          <div className="flex justify-center py-6">
            <span className="text-6xl font-bold">$100</span>
            <span className="text-xl">/month</span>
          </div>
          <ul className="text-lg text-gray-600">
            <li className="py-3 flex items-center">
              <svg className="h-6 w-6 fill-current text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.293 7.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414-1.414l3-3zM17 11a1 1 0 010 2H3a1 1 0 010-2h14z"/></svg>
              Basic features included
            </li>
            <li className="py-3 flex items-center">
              <svg className="h-6 w-6 fill-current text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.293 7.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414-1.414l3-3zM17 11a1 1 0 010 2H3a1 1 0 010-2h14z"/></svg>
              Limited support
            </li>
          </ul>
        </div>
        <div className="max-w-lg w-full bg-white shadow-md rounded-lg overflow-hidden">
          <div className="py-4 px-6 bg-green-500 text-white text-center font-bold uppercase">
            Standard Plan
          </div>
          <div className="flex justify-center py-6">
            <span className="text-6xl font-bold">$600</span>
            <span className="text-xl">/month</span>
          </div>
          <ul className="text-lg text-gray-600">
            <li className="py-3 flex items-center">
              <svg className="h-6 w-6 fill-current text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.293 7.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414-1.414l3-3zM17 11a1 1 0 010 2H3a1 1 0 010-2h14z"/></svg>
              Basic features included<br></br>
              Aditional Premium Features 
            </li>
            <li className="py-3 flex items-center">
              <svg className="h-6 w-6 fill-current text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.293 7.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414-1.414l3-3zM17 11a1 1 0 010 2H3a1 1 0 010-2h14z"/></svg>
              Priority support
            </li>
          </ul>
        </div>
        <div className="max-w-lg w-full bg-white shadow-md rounded-lg overflow-hidden">
          <div className="py-4 px-6 bg-green-500 text-white text-center font-bold uppercase">
            Premium Plan
          </div>
          <div className="flex justify-center py-6">
            <span className="text-6xl font-bold">$1200</span>
            <span className="text-xl">/month</span>
          </div>
          <ul className="text-lg text-gray-600">
            <li className="py-3 flex items-center">
              <svg className="h-6 w-6 fill-current text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.293 7.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414-1.414l3-3zM17 11a1 1 0 010 2H3a1 1 0 010-2h14z"/></svg>
              All features included<br></br>
              Exclusive Premium features 
            </li>
            <li className="py-3 flex items-center">
              <svg className="h-6 w-6 fill-current text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.293 7.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414-1.414l3-3zM17 11a1 1 0 010 2H3a1 1 0 010-2h14z"/></svg>
              Enhanced Customer Support
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Pricing;
