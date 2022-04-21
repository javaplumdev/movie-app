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
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// Components
import PopularMovies from './components/PopularMovies';
import Navbar from './components/Navbar';
import Trending from './components/Trending';
import ResultsMovie from './components/ResultsMovie';
import WatchMovies from './components/WatchMovies';
import DiscoverMovies from './components/DiscoverMovies';

const padding = {
	padding: '1em',
};

function App() {
	const [postPopularMovies, setPostPopularMovies] = useState(null);
	const [postTrending, setPostTrendring] = useState(null);
	const [searchMovies, setSearchMovies] = useState(null);
	const [discoverMovies, setDiscoverMovies] = useState(null);

	const [holderSearch, setHolderSearch] = useState({ movieName: '' });
	const [showResultMovies, setShowResultMovies] = useState(false);
	const [watchMovies, setWatchMovies] = useState(false);

	const API_KEY = `3774131603660110c024a22c82fb41fe`;

	const trending_movies_url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&include_video=true`;
	const popular_movies_url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1&include_video=true`;

	const discover_movies_url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

	const getMovieRequest = async (holderSearch) => {
		const search_movies_url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${holderSearch}`;
		axios.get(search_movies_url).then((response) => {
			setSearchMovies(response.data);
		});
	};

	useEffect(() => {
		axios.get(popular_movies_url).then((response) => {
			setPostPopularMovies(response.data);
		});
		axios.get(trending_movies_url).then((response) => {
			setPostTrendring(response.data);
		});
		axios.get(discover_movies_url).then((response) => {
			setDiscoverMovies(response.data);
		});
	}, []);

	useEffect(() => {
		getMovieRequest(holderSearch.movieName);
	}, [holderSearch.movieName]);

	if (!postTrending) return null;
	if (!postPopularMovies) return null;

	const handleClick = () => {
		console.log(postPopularMovies.results);

		if (holderSearch.movieName === '') {
			alert('Please enter a movie');
		} else {
			setShowResultMovies(true);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setHolderSearch((holderSearch) => {
			return {
				...holderSearch,
				[name]: value,
			};
		});
	};

	const handleWatch = (id) => {
		handleWatchFunction(id);
	};

	const handleWatchFunction = (id) => {
		postPopularMovies.results.map((movie) => {
			if (id === movie.id) {
				// return (
				// 	<WatchMovies key={movie.id} original_title={movie.original_title} />
				// );
				console.log(movie);
			}
		});

		setWatchMovies(true);
	};

	const discover_movies =
		discoverMovies.results.length > 0 ? (
			<Swiper navigation={true} modules={[Navigation]}>
				{discoverMovies.results
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						<SwiperSlide key={movie.id}>
							<DiscoverMovies
								key={movie.id}
								original_title={movie.original_title}
								poster_path={movie.poster_path}
								vote_average={movie.vote_average}
								backdrop_path={movie.backdrop_path}
								overview={movie.overview}
								handleWatch={handleWatch}
							/>
						</SwiperSlide>
					))}
			</Swiper>
		) : (
			<Typography variant="h4">No Movies</Typography>
		);

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
								handleWatch={handleWatch}
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
			>
				{postPopularMovies.results
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						<SwiperSlide key={movie.id}>
							<PopularMovies
								key={movie.id}
								movie_id={movie.id}
								original_title={movie.title}
								poster_path={movie.poster_path}
								vote_average={movie.vote_average}
								handleWatch={handleWatch}
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
				handleClick={handleClick}
				handleChange={handleChange}
				holderSearch={holderSearch}
			/>

			{showResultMovies ? (
				<Container>
					<Grid container spacing={2}>
						{searchMovies.results.map((movie) => (
							<Grid item xs={6} sm={4} md={3} lg={2} key={movie.id}>
								<ResultsMovie
									key={movie.id}
									original_title={movie.original_title}
									poster_path={movie.poster_path}
									vote_average={movie.vote_average}
									handleWatch={handleWatch}
								/>
							</Grid>
						))}
					</Grid>
					<Typography
						variant="h5"
						color="white"
						style={{ padding: '.5em', marginTop: '1em' }}
					>
						Discover some movies!
					</Typography>
					{discover_movies}
				</Container>
			) : (
				<>
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

					<div className="popular-movies">{popular_movies}</div>

					{discover_movies}
				</>
			)}
		</div>
	);
}

export default App;
