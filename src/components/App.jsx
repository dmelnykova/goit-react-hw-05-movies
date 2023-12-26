import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';
// import { GlobalStyle } from './GlobalStyled';
import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetails = lazy(() => import('pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const CastList = lazy(() => import('./CastList/CastList'));
// const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

export const App = () => {
  return <div>
     <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastList />} />
            {/* <Route path="reviews" element={<MovieReviews />} /> */}
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* <GlobalStyle /> */}
  </div>
};
