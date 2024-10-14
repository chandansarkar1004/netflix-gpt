import React from 'react'
import MovieCard from "./MovieCard"

const MoviesList = ({title, movies}) => {
  // console.log(movies); 
  if(!movies) return;
  return (
    <div className='p-4 bg-transparent text-white'>
      <h1 className='text-3xl pb-3'>{title}</h1>
      <div className='flex overflow-x-auto'>
        <div className='flex'>
          {movies?.map((movie) => <MovieCard key={movie?.id} posterPath={movie.poster_path} />)}
        </div>
      </div>
    </div>
  )
}

export default MoviesList