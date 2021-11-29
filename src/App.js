/** @format */
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.module.css";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./components/pages/HomePage";

const MoviesPage = lazy(()=> import('./components/pages/MoviesPage'));
const MovieDetailsPage = lazy(()=> import('./components/pages/MovieDetailsPage'))
const Cast = lazy(()=>import('./components/pages/Cast'));
const Reviews = lazy(()=>import('./components/pages/Reviews'))

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId/*' element={<MovieDetailsPage />} />
        <Route path='/movies/:movieId/cast' element={<Cast />} />
        <Route path='/movies/:movieId/reviews' element={<Reviews />} />
      </Routes>
      </Suspense>
    </Container>
  );
}
