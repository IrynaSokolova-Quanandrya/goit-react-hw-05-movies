/** @format */
import { Route, Routes} from "react-router-dom";
// import {BrowserHistory} from 'react-router'
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cast from './Cast';
// import Reviews from './Reviews';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
// console.log(movie);
  const { movieId } = useParams();
  // console.log({ movieId });

  const KEY = "098c0a06f6f788991ea9bd1b1a28f1b9";
  const URL = "https://api.themoviedb.org/3/";
  

  useEffect(() => {
    axios
      .get(`${URL}/movie/${movieId}?api_key=${KEY}&language=en-US`)
      .then((r) =>(r.data))
      .then((movie) =>setMovie (movie))
    }, []);
  return (
    
    <div>
      {/* <button onClick={BrowserHistory.goBack}>Go Back</button> */}
            <img 
            src ={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt = {`${movie.original_title}`} 
            className='img'/>
        <h1>{`Books ${movie.original_title}`}</h1>
        <p>User Score: {`${movie.vote_average}`}</p>
        <h2>Overview</h2>
        <p>{`${movie.overview}`}</p>
        <h3>Genres</h3>
        <ul>
           {/* {movie && movie.genres.map(genre=>{ 
            <li>{`${genre.name}`}</li>
          })} */}
        </ul>
        <p>Additional Information</p>
      <ul>
        <li>
        <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink> 
        </li>
        <li>
      <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <Routes>
      <Route path='/movies/:movieId/cast' element={<Cast />}/>
      {/* <Route path={`/movies/${movieId}/reviews`} element={<Reviews />} /> */}
      </Routes>
    </div>
  );
}
