import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import s from '../Styles/Cast.module.css';



function Cast(){
    const [movie, setMovie] = useState([]);
console.log(movie);
    const KEY = "098c0a06f6f788991ea9bd1b1a28f1b9";
    const URL = "https://api.themoviedb.org/3/";
    const { movieId } = useParams();

    useEffect(()=>{
        axios
        .get(`${URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
        .then(r=>setMovie(r.data))
    })
    return( 
    <>
    <ul className={s.cast__list}>
        <li>
            {/* <img src={} alt={}/>
            <p>{}</p>
            <p>Character:{}</p> */}
            </li>
    </ul>
    </>
    )  
}
export default Cast;