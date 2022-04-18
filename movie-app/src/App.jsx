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

	const popular_movies =
		post.results.length > 0 ? (
			<Swiper spaceBetween={200} slidesPerView={2}>
				{post.results
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						<SwiperSlide key={movie.id}>
							<PopularMovies
								key={movie.id}
								original_title={movie.original_title}
								poster_path={movie.poster_path}
							/>
						</SwiperSlide>
					))}
			</Swiper>
		) : (
			<h2>No Movies</h2>
		);

	return (
		<div className="App">
			<Navbar />
			<h3>Popular Movies</h3>
			{popular_movies}
		</div>
	);
}

export default App;
