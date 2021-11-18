/** @format */

import { Route, Routes } from "react-router-dom";
import "./App.module.css";
// import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./components/pages/HomePage";
import MovieDetailsPage from "./components/pages/MovieDetailsPage";
import MoviesPage from "./components/pages/MoviesPage";
import NotFoundPage from "./components/pages/NotFoundPage";

export default function App() {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} />
        <Route path='' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
