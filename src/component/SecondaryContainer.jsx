import React from 'react'
import MoviesList from './MoviesList'
import {useSelector} from "react-redux"

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className='bg-black pl-12'>
      <div className='relative -mt-44'>
      <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MoviesList title={"Top Rated"} movies={movies.TopRatedMovies}/>
      <MoviesList title={"Popular"} movies={movies.PopularMovies}/>
      <MoviesList title={"Horror"} movies={movies.nowPlayingMovies}/>
      <MoviesList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
      </div> 
    </div>
  )
}

export default SecondaryContainer