/** @format */
import { toast } from "react-toastify";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

export default function MoviesPage() {
  const KEY = "098c0a06f6f788991ea9bd1b1a28f1b9";
  const URL = "https://api.themoviedb.org/3/";
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get(
        `${URL}search/movie?query=${query}&api_key=${KEY}&language=en-US&page=1&include_adult=false`
      )
      .then((r) => r.data)
      .then((data) => setMovies(data.results));
  }, [query]);

  const searchQuery = (query) => {
    setQuery(query);
    setMovies([]);
  };
  return (
    <>
      <Input onSubmit={searchQuery} />
      <ul>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
