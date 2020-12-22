import React, { useContext } from 'react'
import { MovieContext } from './movieContext'

const DashInterception = () => {
	const [movies, setMovies] = useContext(MovieContext);

	return(
		<div>
			<h3>List of movies: {movies.length}</h3>
		</div>
	);
}

export default DashInterception;