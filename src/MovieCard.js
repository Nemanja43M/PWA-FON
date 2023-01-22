import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="col-md-4">
      <img src={movie.Poster} alt="Poster" />
      <p>{movie.Title}</p>
      <p>{movie.Year}</p>
    </div>
  );
}
export default MovieCard;
