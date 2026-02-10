import React from 'react';

const IMAGE_BASE = 'https://image.tmdb.org/t/p/w300';

export default function MovieCard({ movie }) {
    const poster = movie?.poster_path ? `${IMAGE_BASE}${movie.poster_path}` : './poster-placeholder.png';
    const title = movie?.title || movie?.name || 'Untitled';
    return (
        <li className="movie-card">
            <img src={poster} alt={title} />
            <h3>{title}</h3>
        </li>
    );
}