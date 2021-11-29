/** @format */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FetchMovies from "../../../services/FetchApi";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    FetchMovies.FetchHomeApi()
      .then((data) => setMovies(data.results));
  }, []);
  return (
    <>
      <h1>Tranding Today</h1>
      <ul>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title || movie.original_name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
