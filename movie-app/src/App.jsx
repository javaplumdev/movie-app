// Axios
import axios from 'axios';

// Importing react hooks
import React, { useState, useEffect } from 'react';

// Importing style css
import './App.css';

// Importing swiper js
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Imposting swiper js components
import { Pagination } from 'swiper';
import { Navigation } from 'swiper';

// Importing MUI components
import Typography from '@mui/material/Typography';

// Components
import PopularMovies from './components/PopularMovies';
import Navbar from './components/Navbar';
import Trending from './components/Trending';

const padding = {
	padding: '1em',
};

function App() {
	const [postPopularMovies, setPostPopularMovies] = useState(null);
	const [postTrending, setPostTrendring] = useState(null);
	const [searchMovies, setSearchMovies] = useState(null);
	const [holderSearch, setHolderSearch] = useState({ movieName: '' });

	const API_KEY = `3774131603660110c024a22c82fb41fe`;

	const trending_movies_url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
	const popular_movies_url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
	const search_movies_url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}=en-US&page=1&include_adult=false&query=${holderSearch.movieName}`;

	useEffect(() => {
		axios.get(popular_movies_url).then((response) => {
			setPostPopularMovies(response.data);
		});
		axios.get(trending_movies_url).then((response) => {
			setPostTrendring(response.data);
		});
		axios.get(search_movies_url).then((response) => {
			setSearchMovies(response.data);
		});
	}, []);

	const handleSearch = () => {
		console.log(searchMovies);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setHolderSearch((holderSeach) => {
			return {
				...holderSeach,
				[name]: value,
			};
		});
	};

	if (!postTrending) return null;
	if (!postPopularMovies) return null;

	const handleWatch = () => {
		console.log('TANgina');
	};

	const trending_movies =
		postTrending.results.length > 0 ? (
			<Swiper navigation={true} modules={[Navigation]}>
				{postTrending.results
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						<SwiperSlide key={movie.id}>
							<Trending
								key={movie.id}
								original_title={movie.original_title}
								poster_path={movie.poster_path}
								vote_average={movie.vote_average}
								backdrop_path={movie.backdrop_path}
								overview={movie.overview}
							/>
						</SwiperSlide>
					))}
			</Swiper>
		) : (
			<Typography variant="h4">No Movies</Typography>
		);

	const popular_movies =
		postPopularMovies.results.length > 0 ? (
			<Swiper
				style={padding}
				className="swiper"
				spaceBetween={15}
				slidesPerView={1}
				breakpoints={{
					// when window width is >= 320px
					320: {
						slidesPerView: 2,
					},
					// when window width is >= 499px
					499: {
						slidesPerView: 3,
					},
					720: {
						slidesPerView: 4,
					},
					1020: {
						slidesPerView: 7,
					},
				}}
				pagination={{
					clickable: true,
					type: 'progressbar',
				}}
				modules={[Pagination]}
			>
				{postPopularMovies.results
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						<SwiperSlide key={movie.id}>
							<PopularMovies
								key={movie.id}
								original_title={movie.title}
								poster_path={movie.poster_path}
								vote_average={movie.vote_average}
							/>
						</SwiperSlide>
					))}
			</Swiper>
		) : (
			<Typography variant="h4">No Movies</Typography>
		);

	return (
		<div className="App">
			<Navbar
				handleSearch={handleSearch}
				handleChange={handleChange}
				holderSearch={holderSearch}
			/>
			<Typography
				variant="h5"
				style={{ padding: '.5em', marginTop: '1em' }}
				color="#fff"
			>
				Explore trending movies and series!
			</Typography>
			{trending_movies}

			<Typography
				variant="h5"
				color="white"
				style={{ padding: '.5em', marginTop: '1em' }}
			>
				Popular Movies
			</Typography>

			{popular_movies}
		</div>
	);
}

export default App;
