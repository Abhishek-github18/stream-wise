import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );

    const jsonData = await data.json();
    dispatch(addUpcomingMovies(jsonData.results));
  };

  useEffect(() => {
    upcomingMovies();
  }, []);
};

export default useUpComingMovies;
