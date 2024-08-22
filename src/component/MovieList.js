import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="bg-black">
      <h1 className="text-xl p-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden">
        {movies?.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
