import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const useGetMovieTrailer = (movieId) => {
  const disptach = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/533535/videos?language=en-US",
      options
    );
    const jsonData = await data.json();

    const filteredData = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailerVideo =
      filteredData.length === 0 ? jsonData.results[0] : filteredData[0];

    // console.log(trailerVideo);

    disptach(addTrailerVideo(trailerVideo));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useGetMovieTrailer;
