import React from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import './App.css';
import { UserProvider } from './contexts/UserContext';
import { MoviesProvider } from './contexts/MoviesContext';

function App() {
	return (
		<>
			<UserProvider>
				<MoviesProvider>
					<Navbar />
					<MovieList />
				</MoviesProvider>
			</UserProvider>
		</>
	);
}

export default App;
