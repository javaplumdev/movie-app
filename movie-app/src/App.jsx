import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Components
import PopularMovies from './components/PopularMovies';
import Navbar from './components/Navbar';

function App() {
	const [post, setPost] = useState(null);

	const API_KEY = `3774131603660110c024a22c82fb41fe`;

	const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

	useEffect(() => {
		axios.get(baseURL).then((response) => {
			setPost(response.data);
		});
	}, []);

	if (!post) return null;
	console.log(post.results);

	const popular_movies = post.results.map((movies) => {
		return (
			<PopularMovies
				key={movies.id}
				original_title={movies.original_title}
				poster_path={movies.poster_path}
			/>
		);
	});

	return (
		<div className="App">
			<Navbar />
			<h3>Popular Movies</h3>
			{popular_movies}
		</div>
	);
}

export default App;
