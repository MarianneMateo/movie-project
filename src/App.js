import React from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import './App.css';
import { UserProvider } from './contexts/UserContext';

function App() {

	return (
		<>
			<UserProvider>
				<Navbar />
				<MovieList />
			</UserProvider>
		</>
	);
}

export default App;
