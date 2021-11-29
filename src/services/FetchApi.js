import axios from "axios";
// import { useState, useEffect } from "react";
 const URL = "https://api.themoviedb.org/3/";
    const KEY = "098c0a06f6f788991ea9bd1b1a28f1b9";
 function FetchHomeApi() {
     return axios
    .get(`${URL}trending/all/week?api_key=${KEY}`)
    .then((r) => r.data)
   
}
function FetchMovieDetailsPageApi(movieId){
    return axios
    .get(`${URL}/movie/${movieId}?api_key=${KEY}&language=en-US`)
    .then((r) => (r.data))   
}
function FetchCastApi(movieId) {
     return  axios
     .get(`${URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
     .then(r=>r.data)
   
}
function FetchReviewsApi(movieId) {
    return axios
    .get(`${URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US`)
    .then(r=>r.data)
}
const api = {
    FetchHomeApi,
    FetchCastApi,
    FetchReviewsApi,
    FetchMovieDetailsPageApi
}

export default api