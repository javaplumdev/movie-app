import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import PopularMovies from './components/PopularMovies';

function App() {
	const [displayMovies, setDisplayMovies] = useState();
	const MOVIE_API = 'https://api.themoviedb.org/3/';
	const API_KEY = `3774131603660110c024a22c82fb41fe`;

	const fetchMovies = async () => {
		const { data: results } = await axios.get(`${MOVIE_API}/discover/movie`, {
			params: {
				api_key: API_KEY,
			},
		});
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	return <div className="App">{renderMovies()}</div>;
}

export default App;
