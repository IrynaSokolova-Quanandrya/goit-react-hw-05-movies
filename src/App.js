/** @format */
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.module.css";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./components/pages/HomePage";
// import MovieDetailsPage from "./components/pages/MovieDetailsPage";
// import MoviesPage from "./components/pages/MoviesPage";
import NotFoundPage from "./components/pages/NotFoundPage";

const MoviesPage = lazy(()=> import('./components/pages/MoviesPage'));
const MovieDetailsPage = lazy(()=> import('./components/pages/MovieDetailsPage'))


export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </Container>
  );
}
