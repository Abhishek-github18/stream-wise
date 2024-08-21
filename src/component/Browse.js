import useGetPopularMovies from "../hooks/useGetPopularMovies";
import useGetTopRatedMovies from "../hooks/useGetTopRatedMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  useGetPopularMovies();
  useUpComingMovies();
  useGetTopRatedMovies();

  return (
    <div className="bg-black">
      <Header />
      <MainContainer/>
      <SecondaryContainer/> 
    </div>
  );
};

export default Browse;
