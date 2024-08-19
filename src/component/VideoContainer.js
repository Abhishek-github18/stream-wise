import { useSelector } from "react-redux";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const VideoContainer = ({ movieId }) => {
  useGetMovieTrailer(movieId);
  const movieTrailerDetails = useSelector((state) => state.movies?.trailer);
  const trailerKey = movieTrailerDetails?.key;

  return (
    <div className="w-full sm:aspect-video bg-gradient-to-tr from-black">
    <iframe
      className="w-full aspect-[1/1.5] sm:aspect-video"
      src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&rel=0&disablekb=1&modestbranding=1`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
  );
};

export default VideoContainer;
