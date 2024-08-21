import React from "react";
import { IMAGE_URL_PREFIX_500 } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
        <div className="px-2">
        <div className="w-48">
            <img
            alt="image-poster"
            src={IMAGE_URL_PREFIX_500 + movie.poster_path}
            />
        </div>
        </div>
  );
};

export default MovieCard;
