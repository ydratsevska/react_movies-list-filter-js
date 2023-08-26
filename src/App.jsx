import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const getSearchedMovies = movies => (
    movies.filter(movie => (
      movie.title.toLowerCase().includes(query.trim().toLowerCase())
      || movie.description.toLowerCase().includes(query.trim().toLowerCase())
    )));

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={event => (setQuery(event.target.value))}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={getSearchedMovies(moviesFromServer)} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
