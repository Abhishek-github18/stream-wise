import { useSelector } from "react-redux";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import useGetTopRatedMovies from "../hooks/useGetTopRatedMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptContainer from "./GptContainer";

const Browse = () => {
  useNowPlayingMovies();
  useGetPopularMovies();
  useUpComingMovies();
  useGetTopRatedMovies();

  const gptView = useSelector((state) => state.useGpt.showGpt);
  // console.log(gptView);
    

  return (
    <div className="">
      <Header />
      {gptView ? (
        <GptContainer />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
