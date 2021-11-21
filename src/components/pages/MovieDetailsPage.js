/** @format */
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useMatch } from "react-router-dom";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);

  const match = useMatch();
  console.log(match);
  const { movieId } = useParams();
  console.log({ movieId });
  const KEY = "098c0a06f6f788991ea9bd1b1a28f1b9";
  const URL = "https://api.themoviedb.org/3/";

  useEffect(() => {
    axios
      .get(`${URL}trending/all/week?api_key=${KEY}`)
      .then((r) => r.data)
      .then((movie) => console.log(movie.results.id));
  }, []);
  return (
    <div>
      <img className='img'>img</img>
      <h1>`Books ${movieId}`</h1>
      <p>User Score:</p>
      <h2>Overview</h2>
      <p>Overview: text</p>
      <h3>Genres</h3>
      <ul>
        <li>genres</li>
      </ul>
    </div>
  );
}
