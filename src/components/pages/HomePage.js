/** @format */
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useRouterMatch } from "react-router-dom";
// import Container from "../Container/Container";

export default function HomePage() {
  const [movies, setMovie] = useState([]);
  const KEY = "098c0a06f6f788991ea9bd1b1a28f1b9";
  const URL = "https://api.themoviedb.org/3/";
  console.log(movies);

  useEffect(() => {
    axios
      .get(`${URL}trending/all/week?api_key=${KEY}`)
      .then((r) => r.data)
      .then((data) => setMovie(data.results));
  }, []);
  return (
    <>
      <h1>Tranding Today</h1>
      <ul>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
