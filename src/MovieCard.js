import React from "react";

const MovieCard = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="movie" key={index}>
          <div>
            <p>{movie.Year}2015</p>
          </div>
          <div>
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie.Title}
            />
          </div>
          <div>
            <span>{movie.Type}hello</span>
            <h3>{movie.Title}hi</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieCard;
