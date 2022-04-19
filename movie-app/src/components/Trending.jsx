// Importing mui components
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

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
					height: '400px',
					objectFit: 'fill',

					'&:hover': {
						backgroundColor: 'primary.main',
						opacity: [0.9, 0.8, 0.7],
					},
				}}
				src={image_path + backdrop_path}
			/>

			<Grid className="movie-details" maxWidth="md">
				<div className="movie-poster">
					<img src={image_path + poster_path} className="poster-image" />
				</div>

				<Container
					className="movie-description"
					sx={{ display: { xs: 'none', sm: 'block' } }}
					style={{ marginLeft: '.5em' }}
				>
					<Typography variant="h5">{original_title}</Typography>
					<Typography variant="body1">{`${overview} `}</Typography>
					{/* <Button variant="contained" style={{ marginTop: '1em' }}>
						Watch
					</Button> */}
				</Container>
			</Grid>
			<Box />
		</div>
	);
}

export default Trending;
