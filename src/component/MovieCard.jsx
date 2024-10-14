import React from 'react'
import { IMG_CDN_URl } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48'>
      <img src={IMG_CDN_URl+ posterPath} alt="movies" className='h-64' />
    </div>
  )
}

export default MovieCard