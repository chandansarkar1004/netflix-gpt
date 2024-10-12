import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='font-extrabold text-7xl drop-shadow-2xl mb-4 '>{title}</h1>
      <p className='text-2xl py-6 w-1/2 leading-relaxed  drop-shadow-md'>
        {overview}
      </p>

      <div className='flex space-x-4'>
        <button className='bg-white hover:bg-opacity-90 transition-all px-8 py-4 text-black text-xl font-semibold rounded-md shadow-lg flex items-center'>
          <span className='text-2xl pr-2'>▶️</span> Play
        </button>

        <button className='bg-black transition-all px-8 py-4 text-white text-xl font-semibold rounded-md shadow-lg bg-opacity-70 hover:bg-opacity-40'>
         More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle;
