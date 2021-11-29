import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import s from './Cast.module.css';
import FetchCredits from "../../../services/FetchApi";




function Cast(){
    const [credits, setCredits] = useState([]);
    const { movieId } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        FetchCredits.FetchCastApi(movieId)
        .then(credits=>setCredits(credits.cast))
    },[movieId])
    return( 
    <>
    <button onClick={() => navigate(-1)}>Go Back</button>
    {credits &&
    <ul className={s.cast__list}>
        {credits.map(credit=>
        <li key={credit.id}>
             <img
          src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
          alt={`${credit.name}`}
          className={s.img} />
          <p>{credit.name}</p>
          <p>Caracter: {credit.character}</p>
        </li>)}
    
    </ul>}
    </>
    )  
}

   
   
      
   
export default Cast;