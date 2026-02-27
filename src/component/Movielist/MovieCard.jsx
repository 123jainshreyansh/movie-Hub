import React from 'react'
import './MovieCard.css'


function MovieCard({movie}) {
  return (
    <a href={`https://www.themoviedb.org/movie/${movie.id}`}
    target='_blank'
    className="movie_card">
      <img
        src={`
          https://image.tmdb.org/t/p/w500/${movie.poster_path}.jpg
          `}
        alt="movie poster"
        className="movie_poster"
      />

      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.original_title}</h3>
        <div
          className=" 
        align_center
        movie_date_rate"
        >
          <p>{movie.release_date}</p>
          <p className='align_center'>
            {movie.vote_average}{" "}
            <img
              src="https://imgs.search.brave.com/HGKz6Q4N3YMfZaz-DaAm-R_8XMMWeZ7vLLVzvfNDn-g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9lbW9q/aWdyYXBoLm9yZy9t/ZWRpYS9mYWNlYm9v/ay9zdGFyXzJiNTAu/cG5n"
              alt=""
              width="34px"
            />
          </p>
        </div>
        <p className="movie_descriptor">
          {movie.overview.slice(0, 100) + "..."}
        </p>
      </div>
    </a>
  );
}

export default MovieCard