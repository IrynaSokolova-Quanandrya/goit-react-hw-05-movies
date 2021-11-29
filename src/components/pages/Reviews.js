import {useNavigate, useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import FetchReviews from "../../services/FetchApi";

export default function Reviews(){
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        FetchReviews.FetchReviewsApi(movieId)
        .then(reviews=>setReviews(reviews.results))
    },[movieId])

    return <>
          <button onClick={() => navigate(-1)}>Go Back</button>
{reviews ? 
<ul>
    {reviews.map(review=>
        <li key={review.id}>
        <h3>Author:{review.author}</h3>
    <p>{review.content}</p>
        </li>)}
</ul>
: <p>We dont have any reviews for this movie</p>}
    
    
    </>;
}