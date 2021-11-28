import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import { useState, useEffect } from "react";

export default function Reviews(){
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
    const navigate = useNavigate();
    const KEY = "098c0a06f6f788991ea9bd1b1a28f1b9";
    const URL = "https://api.themoviedb.org/3/";
   console.log(reviews);
    useEffect(()=>{
        axios
        .get(`${URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US`)
        .then(r=>r.data)
        .then(reviews=>setReviews(reviews.results))
    },[movieId])

    return <>
          <button onClick={() => navigate(-1)}>Go Back</button>
{reviews ? 
<ul>
    {reviews.map(review=>
        <li>
        <h3>Author:{review.author}</h3>
    <p>{review.content}</p>
        </li>)}
</ul>
: <p>We dont have any reviews for this movie</p>}
    
    
    </>;
}