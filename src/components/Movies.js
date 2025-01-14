import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovies = movies.map(movie => {
    return (
      <div>
        {movie.title}<br />
        {movie.time} minutes<br />
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies}
    </div>
  );
};

export default Movies;
