import React from 'react'
import Tweet from './Tweet';

const Tweets = () => {
	const tweetsArr = [
		{name: 'agus', hour: "22:00", tweet:'react ugggh'}, 
		{name: 'RandyRandom35', hour: "5:00", tweet: 'I dunno'},
		{name: 'webdevsimplified', hour: "2:00", tweet: 'hey guyyys, I\'m simplifying the web'},
	];
	return(
		<div>
			<h2>I have {tweetsArr.length} tweets</h2>
			<div className="tweets">
				{
					tweetsArr.map((tweet) => <Tweet name={tweet.name} tweet={tweet.tweet} hour={tweet.hour}/>)
				}
			</div>
		</div>
	);
}

export default Tweets;