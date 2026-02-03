import React from 'react';

const MovieCard = ({ movie }) => (
    <div className="movie-card">
        <div className="poster-box">
            <img src={movie.poster} alt={movie.title} />
            <div className="card-rating">{movie.rating || movie.imdb}</div>
            <div className="card-lang">GEO</div>
            <i className="fa-solid fa-circle-play play-hover"></i>
        </div>
        <div className="card-info">
            <h4>{movie.title}</h4>
            <span>{movie.year || "2024"} • {movie.genre}</span>
        </div>
    </div>
);

export default MovieCard;