import React from 'react'

const QuizPublish = ({ showQuizPublish, setShowQuizPublish, showButton, setShowButton }) => {

  const handleQuizPublish = () => {
    setShowQuizPublish(!showQuizPublish)
    setShowButton(!showButton)
  }

  const clipboard = () => {
    alert('Link Copied To Clipbopard')
  }

  return (
    <div className="bg-white p-8 rounded shadow-lg relative">
      <button onClick={handleQuizPublish} className="absolute top-4 right-4 text-gray-700 hover:text-red-500 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <div className='mt-7 mb-10'>
        <h1 className="text-4xl font-semibold text-gray-700">Congrats your Quiz is Published!</h1>
      </div>

      <div className='mt-4 mb-4'>
        <p className="w-full font-medium text-gray-500 bg-gray-100 px-4 py-2 rounded shadow">
          Your Link is Here
        </p>
      </div>

      <div className="flex justify-center mt-5">
        <button onClick={clipboard}
          className="w-1/2 bg-[#60b94a] text-white px-4 py-2 rounded hover:bg-[#60b94a] focus:outline-none">Share</button>
      </div>
    </div>

  )
}

export default QuizPublish
