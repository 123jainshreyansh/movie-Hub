import React, { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "../FilterGroup";

const MovieList = ({ type, title, emoji}) => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setfilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setfilterMovies(sortedMovies);
    }
  }, [sort]);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=1b592946c4bc4d12cab24d7163fed40a`
    );

    const data = await response.json();
    setMovies(data.results);
    setfilterMovies(data.results);
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setfilterMovies(movies);
    } else {
      setMinRating(rate);

      const filtered = movies.filter((movie) => movie.vote_average >= rate);

      setfilterMovies(filtered);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="movie_list" 
    id={type}
    >
      <header className=" align_center movie_list_header">
        <h2
          className="
        align_center
        movie_list_heading"
        >
          {title} {" "}
          <img
            src="https://imgs.search.brave.com/SvFq2Ld2oL2NdsGmO0TX-4FZf1CNXNFys43a8DLDwP0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4z/LmVtb2ppLmdnL3Vu/aWNvZGUvZmFjZWJv/b2svZmlyZS5wbmc"
            alt="fire"
            width="35px"
            height
          />
        </h2>

        <div
          className="
        align_center
        movie_lists_fs"
        >
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />

          <select
            name="by"
            id=""
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">Sort By</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select
            name="order"
            id=""
            onChange={handleSort}
            value={sort.order}
            className=" 
          
          movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
