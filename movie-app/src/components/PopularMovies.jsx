// C:\Users\ADMIN\Documents\GitHub\movie-app\node_modules\swiper\swiper-bundle.esm.js

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function PopularMovies({ original_title, poster_path }) {
	const image_path = `https://image.tmdb.org/t/p/w342`;

	return (
		<div className="popular-movies">
			<img src={image_path + poster_path} alt={poster_path} />
			<p>{original_title}</p>
			{/* <Swiper
				spaceBetween={50}
				slidesPerView={3}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 1</SwiperSlide>
			</Swiper> */}
		</div>
	);
}

export default PopularMovies;
