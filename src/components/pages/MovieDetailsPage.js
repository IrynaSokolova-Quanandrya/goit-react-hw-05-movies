/** @format */
import axios from "axios";
// import { lazy, Suspense } from "react";
// import { Route, Routes } from "react-router-dom";

import { NavLink, useNavigate, useParams, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import s from '../Styles/MovieDetailsPage.module.css'
// const Cast = lazy(()=>import('./Cast'));
// const Reviews = lazy(()=>import('./Reviews'))

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const navigate = useNavigate();
  ;
  const KEY = "098c0a06f6f788991ea9bd1b1a28f1b9";
  const URL = "https://api.themoviedb.org/3/";


  useEffect(() => {
    axios
      .get(`${URL}/movie/${movieId}?api_key=${KEY}&language=en-US`)
      .then((r) => (r.data))
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
             {/* {movie.genres.map(genre =>
            <li>{`${genre.name}`}</li>
          )}  */}
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
        {/* <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path='/movies/:movieId/cast' element={<Cast />} />
        <Route path='/movies/:movieId/reviews' element={<Reviews />} />
        </Routes>
      </Suspense> */}

        <Outlet />

      </div>
    </>
  );
}
