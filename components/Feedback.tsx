import React from 'react'

const Feedback = () => {
  return (
    <div className="container mx-auto px-4 py-8 mb-11">
      <h1 className="text-5xl font-bold mt-1 mb-10">User Feedback</h1>
      <h3 className="regular-18 -mt-0.5 mb-3 text-green-50">
      Your feedback is invaluable to us; it guides our path towards continuous improvement and excellence.
        </h3>
      <form>
        <textarea
          placeholder="Enter your feedback..."
          className="w-full px-3 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  )
}
export default Feedback;
