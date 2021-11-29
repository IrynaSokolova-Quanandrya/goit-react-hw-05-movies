import { NavLink, useNavigate, useParams, Outlet } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import s from './MovieDetailsPage.module.css';
import FetchMovie  from "../../../services/FetchApi";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const navigate = useNavigate();
  console.log(movie);
  useEffect(() => {
    FetchMovie.FetchMovieDetailsPageApi(movieId)
      .then(setMovie)
  }, [movieId]);

  return (
    <>
      <button onClick={() => navigate(-1)}>Go Back</button>
      {movie &&
      <div className={s.container}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.original_title}`}
          className={s.img} />
      </div>
      <div className={s.data}>
        <h1>{`Books ${movie.original_title}`}</h1>
        <p>User Score: {`${movie.vote_average}`}</p>
        <h2>Overview</h2>
        <p>{`${movie.overview}`}</p>
        <h3>Genres</h3>
           
           <ul className={s.list}>
             {movie.genres.map(genre =>
            <li>{`${genre.name}`}</li>
          )} 
         </ul>
         
      </div>
    </div>}
      <div className={s.link__list}>
        <p>Additional Information</p>
        <ul>
          <li>
            <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Outlet />

      </div>
    </>
  );
}
