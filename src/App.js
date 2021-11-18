/** @format */

import { Route, Switch } from "react-router-dom";
import "./App.module.css";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./components/pages/HomePage";
import MovieDetailsPage from "./components/pages/MovieDetailsPage";
import MoviesPage from "./components/pages/MoviesPage";
import NotFoundPage from "./components/pages/NotFoundPage";

export default function App() {
  return (
    <>
      <AppBar />

      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route path='/movies'>
          <MoviesPage />
        </Route>

        <Route path='/movies/:movieId'>
          <MovieDetailsPage />
        </Route>

        <Route path='/movies/:movieId'>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}
