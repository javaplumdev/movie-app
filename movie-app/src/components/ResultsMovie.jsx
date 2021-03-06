// Imporing all of the MUI components
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import Button from '@mui/material/Button';

const designCard = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	backgroundColor: '#2d3135',
	color: '#fff',
	marginTop: '2em',
};

const designButton = {
	width: '100%',
	marginTop: '.5em',
	cursor: 'pointer',
};

const flexBox = {
	display: 'flex',
	flexWrap: 'wrap',
};

function ResultsMovie({ poster_path }) {
	const image_path = `https://image.tmdb.org/t/p/w342`;

	return (
		<Card style={designCard}>
			<div className="movie-poster-holder">
				<CardMedia
					className="movie-poster"
					component="img"
					height="300px"
					image={image_path + poster_path}
					alt={poster_path}
				/>
			</div>
			<CardContent>
				<Button variant="contained" style={designButton} size="sm">
					Watch
				</Button>
			</CardContent>
		</Card>
	);
}

export default ResultsMovie;
