import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import s from '../Styles/Cast.module.css';



function Cast(){
    const [credits, setCredits] = useState([]);
    const { movieId } = useParams();
    const navigate = useNavigate();
    const KEY = "098c0a06f6f788991ea9bd1b1a28f1b9";
    const URL = "https://api.themoviedb.org/3/";
console.log(credits);
    useEffect(()=>{
        axios
        .get(`${URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
        .then(response=>response.data)
        .then(credits=>setCredits(credits.cast))
    },[movieId])
    return( 
    <>
    {credits &&
    <ul className={s.cast__list}>
        {credits.map(credit=>
        <li>
             <img
          src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
          alt={`${credit.name}`}
          className={s.img} />
          <p>{credit.name}</p>
          <p>Caracter: {credit.character}</p>
        </li>)}
    
    </ul>}
    
    <button onClick={() => navigate(-1)}>Go Back</button>

    </>
    )  
}

   
   
      
   
export default Cast;