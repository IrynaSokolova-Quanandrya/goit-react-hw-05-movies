import axios from "axios";
// import { useState, useEffect } from "react";

export default function FetchApi() {
    const URL = "https://api.themoviedb.org/3/";
    const KEY = "098c0a06f6f788991ea9bd1b1a28f1b9";
    axios
    .get(`${URL}trending/all/week?api_key=${KEY}`)
    .then((r) => r.data)
}