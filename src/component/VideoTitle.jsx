import React from 'react';

const VideoTitle = ({ title, overview }) => {
  
  // Split the overview into an array of words
  const overviewWords = overview.split(' ');
  
  // Get the first 30 words and add "..." if there are more than 30
  const truncatedOverview = overviewWords.length > 35
    ? overviewWords.slice(0, 30).join(' ') + '...'
    : overview;

  return (
    <div className='pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='font-extrabold text-7xl drop-shadow-2xl mb-4'>{title}</h1>
      
      <p className='text-2xl py-6 w-1/2 leading-relaxed drop-shadow-md'>
        {truncatedOverview}
      </p>
    </div>
  );
}

export default VideoTitle;
