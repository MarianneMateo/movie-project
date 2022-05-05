import React from 'react';

const Movie = ({ movie }) => {
	console.log('Movie');

	const imgStyles = {
		height: '240px',
		objectFit: 'cover', //la imagen no se estira ni se comprime sino que trata de adaptarse al espacio
	};

  const isFavorites = true;

	return (
		<div className="card">
			<img
				src={movie.imageUrl}
				alt={movie.title}
				className="card-img-top"
				style={imgStyles}
			/>
			<div className="card-body">
				<h4>{movie.title}</h4>
				<button className={`btn ${isFavorites ? 'btn-success' : 'btn-outline-primary'}`}>Favorito</button>
			</div>
			<h1>Movie</h1>
		</div>
	);
};

export default Movie;
