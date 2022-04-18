// Importing mui components
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Trending({
	original_title,
	poster_path,
	vote_average,
	backdrop_path,
	overview,
}) {
	const image_path = `https://image.tmdb.org/t/p/w342`;

	return (
		<div className="trending">
			<Box
				className="box-img"
				component="img"
				sx={{
					width: '100%',
					height: '300px',
					objectFit: 'fill',

					'&:hover': {
						backgroundColor: 'primary.main',
						opacity: [0.9, 0.8, 0.7],
					},
				}}
				src={image_path + backdrop_path}
			/>

			<div className="movie-details">
				<div className="movie-poster">
					<img src={image_path + poster_path} className="poster-image" />
				</div>
				<div className="movie-description">
					<Typography variant="h5" style={{ marginLeft: '.5em' }}>
						{original_title}
					</Typography>
					<Typography variant="body1" style={{ marginLeft: '.5em' }}>
						{`${overview} `}
					</Typography>
				</div>
			</div>
			<Box />
		</div>
	);
}

export default Trending;
