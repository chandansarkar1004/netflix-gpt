import React from 'react';
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';


const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const randomIndex = Math.floor(Math.random() * movies.length)

    const mainMovies = movies[randomIndex];
    // console.log(mainMovies);
    const {original_title, overview, id} = mainMovies;

  return (
    <div className='relative'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground moviesId={id}/>
    </div>
    
  )
}

export default MainContainer;