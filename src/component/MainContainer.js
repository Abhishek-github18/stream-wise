import React from 'react'
import VideoContainer from './VideoContainer'
import TitleContainer from './TitleContainer'
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const movies = useSelector((state) => state.movies?.nowPlayingMovies);

    if (!movies) return;
  
    const {original_title, overview, id} = movies[0];
    
    // console.log(movies[0]);
  
  return (
    <div className='bg-black'>
      <VideoContainer movieId={id} />
      <TitleContainer title={original_title} synopsis={overview} />
    </div>
  )
}

export default MainContainer
