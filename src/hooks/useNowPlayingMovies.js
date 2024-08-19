import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const moviesList = await data.json();
    dispatch(addNowPlayingMovies(moviesList.results));
    console.log(moviesList.results);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return <div></div>;
};

export default useNowPlayingMovies;
