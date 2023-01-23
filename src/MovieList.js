import React from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { useState } from "react";
import queryString from "query-string";

function MovieList(props) {
  const [movie, setMovie] = useState([]);

  function fetchMovie() {
    let q = queryString.parse(props.location.search);
    console.log(q);
    axios
      .get(
        `https://www.omdbapi.com/?i=tt3896198&apikey=28101efb&s=${q.searchText}`
      )
      .then((resp) => resp.data)
      .then((data) => data.Search)
      .then((movies) => setMovie(movies));
  }
  fetchMovie();
  return (
    <div className="row">
      {movie.map((m) => (
        <MovieCard movie={m} key={m.imdbID} />
      ))}
    </div>
  );
}
export default MovieList;
