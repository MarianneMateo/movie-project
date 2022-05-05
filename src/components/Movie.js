import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const Movie = ({ movie }) => {
	const { user, toggleFavoriteMovieToUser } = useContext(UserContext);

	const imgStyles = {
		height: '240px',
		objectFit: 'cover', //la imagen no se estira ni se comprime sino que trata de adaptarse al espacio
	};

	const isFavorites = user?.favoriteMovies?.includes(movie.id);

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
				{ user?.id &&
				<button
					onClick={() => toggleFavoriteMovieToUser(movie.id)}
					className={`btn ${
						isFavorites ? 'btn-success' : 'btn-outline-primary'
					}`}
				>
					Favorito
				</button>
}
			</div>
		</div>
	);
};

export default Movie;
