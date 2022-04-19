function ResultsMovie({ original_title, poster_path }) {
	const image_path = `https://image.tmdb.org/t/p/w342`;

	return (
		<>
			<img src={image_path + poster_path} alt={poster_path} />
			<p>{original_title}</p>
		</>
	);
}

export default ResultsMovie;
