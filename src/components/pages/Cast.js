import axios from "axios";
// import {BrowserHistory} from 'react-router'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



function Cast(){
    const [movie, setMovie] = useState([]);

    const KEY = "098c0a06f6f788991ea9bd1b1a28f1b9";
    const URL = "https://api.themoviedb.org/3/";
    const { movieId } = useParams();

    useEffect(()=>{
        axios
        .get(`${URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
        .then(r=>console.log)
    })
    return <>
    {/* <button onClick={BrowserHistory.goBack}>Go Back</button> */}
    Hello</>
    
}
export default Cast;