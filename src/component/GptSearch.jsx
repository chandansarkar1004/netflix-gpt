import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import netflixbg from "../utils/netflixBg.jpg"

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 w-full h-full">
        <img src={netflixbg} alt="background" className=" top-0 left-0 w-full h-full object-cover"/>
      </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch;