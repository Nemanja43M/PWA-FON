import React from "react";
import style from "./MovieCard.module.css";

function MovieCard({ movie }) {
  return (
    <div className={style.container}>
      <img src={movie.Poster} alt="Poster" />
      <p>{movie.Title}</p>
      <p>{movie.Year}</p>
    </div>
  );
}
export default MovieCard;
