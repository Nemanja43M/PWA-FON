import React from "react";

function MovieCard() {
  const movie = {
    Title: "Iron Man",
    Year: "2008",
    imdbID: "tt0371746",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
  };
  return (
    <div className="col-md-4">
      <img src={movie.Poster} alt="Poster" />
      <p>{movie.Title}</p>
      <p>{movie.Year}</p>
    </div>
  );
}
export default MovieCard;
