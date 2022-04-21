// C:\Users\ADMIN\Documents\GitHub\movie-app\node_modules\swiper\swiper-bundle.esm.js

// Imporing all of the MUI components
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import StarRateIcon from '@mui/icons-material/StarRate';
import Button from '@mui/material/Button';

const designCard = {
	backgroundColor: '#2d3135',
	color: '#fff',
};

const designButton = {
	width: '100%',
	marginTop: '.5em',
	cursor: 'pointer',
};

function PopularMovies({
	original_title,
	poster_path,
	vote_average,
	handleWatch,
	movie_id,
}) {
	const image_path = `https://image.tmdb.org/t/p/w342`;

	return (
		<div className="card-childs">
			<Card sx={{ flexGrow: 1 }} style={designCard}>
				<div className="movie-poster-holder">
					<CardMedia
						className="movie-poster"
						component="img"
						height="300px"
						image={image_path + poster_path}
						alt={poster_path}
					/>
					<div className="ratings">
						<StarRateIcon />
						{vote_average}
					</div>
				</div>
				<CardContent>
					<Button
						variant="contained"
						style={designButton}
						onClick={() => handleWatch(movie_id)}
					>
						Watch now
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}

export default PopularMovies;
