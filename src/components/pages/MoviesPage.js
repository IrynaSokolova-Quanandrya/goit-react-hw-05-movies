/** @format */
import { toast } from "react-toastify";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


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


  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };
  const onSubmit = (query) => {
    setQuery(query);
    setMovies([]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      return toast.error("Enter search query!");
    }
    onSubmit(query);

    setQuery("");
  };

 
  return (
    <>
    {/* <button onClick={BrowserHistory.goBack}>Go Back</button> */}
     <form className='form' onSubmit={handleSubmit}>
      <label className='label'>
        <input
          className='input'
          value={query}
          name={query}
          type='search'
          onChange={handleChange}></input>
        <button type='submit' className='button'>
          Search
        </button>
      </label>
    </form>
      <ul>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
