import React from 'react'
import Tweet from './Tweet';

const Tweets = (props) => {
	return(
		<section>
			<Tweet me={props.me} age={props.age}/>
			<Tweet me={props.me} age={props.age}/>
			<Tweet me={props.me} age={props.age}/>
			<Tweet me={props.me} age={props.age}/>
			<Tweet me={props.me} age={props.age}/>
			<Tweet me={props.me} age={props.age}/>
			<Tweet me={props.me} age={props.age}/>
		</section>
	);
}

export default Tweets;