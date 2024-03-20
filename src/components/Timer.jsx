import React from 'react'

const Timer = () => {
  return (
    <div className='ml-4 mt-16'>
      <div className='mt-4'>
        <div className='text-center'>
          Timer
        </div>
        <div className=''>
          <button
            className=' text-gray-400 mt-2 py-1 w-20 cursor-pointer rounded shadow-md focus:bg-red-500 focus:shadow-none focus:text-white'
          >OFF</button>
          <br />
          <button
            className=' text-gray-400 mt-2 py-1 w-20 cursor-pointer rounded shadow-md focus:bg-red-500 focus:shadow-none focus:text-white'
          >5 sec</button>
          <br />
          <button
            className=' text-gray-400 mt-2 py-1 w-20 cursor-pointer rounded shadow-md focus:bg-red-500 focus:shadow-none focus:text-white'
          >10 sec</button>
        </div>
      </div>
    </div>
  )
}

export default Timer
