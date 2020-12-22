import React from 'react'

const Movie = ({name, price}) => {
	return(
		<div>
			<h5>{name}</h5>
			<p>$ {price}</p>
		</div>
	);
};

export default Movie;