import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-40'>
        <form className='bg-black ml-40 py-4 w-[43%] '>
            <input type="text" className=' p-2 ml-4 w-[67%]' placeholder='what would you like to watch today' />
            <button className='p-2 ml-4  w-48 bg-red-700 text-white rounded-sm'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar