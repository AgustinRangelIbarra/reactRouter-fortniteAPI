import React from 'react'

const Tweet = (props) => {
	return (
		<div>
			<h3>{props.tweet}</h3><h6>{props.hour}</h6>
			<h3>{props.name}</h3>
			<hr/>
		</div>
	);
}

export default Tweet;