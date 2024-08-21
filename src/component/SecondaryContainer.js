import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((state) => state.movies?.nowPlayingMovies);
  const popularMovies = useSelector((state) => state.movies?.popularMovies);
  const upComingMovies = useSelector((state) => state.movies?.upComingMovies);
  const topRatedMovies = useSelector((state) => state.movies?.topRatedMovies);
  return (
    <div className='xl:-mt-48 xl:z-20 xl:relative'>
      <MovieList title={"Now Playing Movies"} movies={nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={popularMovies}/>
      <MovieList title={"Top Rated Movies"} movies={topRatedMovies}/>
      <MovieList title={"UpComing Movies"} movies={upComingMovies}/>
    </div>
  )
}

export default SecondaryContainer
