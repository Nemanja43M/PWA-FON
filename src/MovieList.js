/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { useState, useEffect } from "react";
import queryString from "query-string";
import style from "./MovieList.module.css";

function MovieList(props) {
  const [movie, setMovie] = useState([]);

  function fetchMovie(params) {
    axios
      .get(`https://www.omdbapi.com/?i=tt3896198&apikey=28101efb&s=${params}`)
      .then((resp) => resp.data)
      .then((data) => data.Search)
      .then((movies) => setMovie(movies));
  }
  useEffect(() => {
    let q = queryString.parse(props.searchText);
    console.log(q);
    fetchMovie(q.searchText);
  }, []);
  useEffect(() => {
    fetchMovie(props.search);
  }, [props.search]);
  return (
    <div className={style.box}>
      {movie.map((m) => (
        <MovieCard movie={m} key={m.imdbID} />
      ))}
    </div>
  );
}
export default MovieList;
