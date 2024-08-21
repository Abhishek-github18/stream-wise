import React from "react";
import { IMAGE_URL_PREFIX_500 } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
        <div className="px-2 relative group">
        <div className="w-48">
            <img
            alt="image-poster"
            src={IMAGE_URL_PREFIX_500 + movie.poster_path}
            />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-white p-4">
          <h3 className="text-lg font-bold">{movie.title}</h3>
          <p className="text-sm">{movie.overview}</p>
        </div>
      </div>
        </div>
  );
};

export default MovieCard;
