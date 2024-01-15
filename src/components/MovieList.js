import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return
    console.log("movies --> ", movies[0]?.poster_path)
  return (
    <div className=" ">
        <h1 className="text-xl font-bold text-white p-2">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide pb-2">
      <div className="flex">
        {movies.map(movie => <MovieCard key={movie.id} posterPath={movie?.poster_path} /> )}
      </div>
      </div>
    </div>
  );
};

export default MovieList;
