// C:\Users\ADMIN\Documents\GitHub\movie-app\node_modules\swiper\swiper-bundle.esm.js

// Imporing all of the MUI components
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';

const fullHeight = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	backgroundColor: '#2d3135',
	color: '#fff',
};

function PopularMovies({ original_title, poster_path, vote_average }) {
	const image_path = `https://image.tmdb.org/t/p/w342`;

	return (
		<div className="popular-movies">
			<Card sx={{ maxWidth: 200, height: 375 }} style={fullHeight}>
				<CardActionArea>
					<div className="movie-poster-holder">
						<CardMedia
							className="movie-poster"
							component="img"
							height="100%"
							image={image_path + poster_path}
							alt={poster_path}
						/>
						<div className="ratings">
							<StarRateIcon />
							{vote_average}
						</div>
					</div>
					<CardContent>
						<Typography gutterBottom variant="body1" component="div">
							{original_title}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
}

export default PopularMovies;
