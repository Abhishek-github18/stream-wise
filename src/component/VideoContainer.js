import React from 'react'
import { useSelector } from 'react-redux'

const VideoContainer = () => {
    const movies = useSelector((state)=> state.movies?.nowPlayingMovies);
    if(!movies) return;

    console.log(movies[0]);
    
  return (
    <div>
      VideoContainer
    </div>
  )
}

export default VideoContainer
