import React from 'react';
import { useState } from 'react';


const Home = (props) => {
	
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter((prev)=> prev + 1);
		//setCounter(counter + 1);
		console.log(counter);
	 };

	return(
		<div>
			<h1>Home Page</h1>
			<hr/>
			<h2>Video grid: {counter}</h2>
			<button onClick={increment}>Counter</button>
			<div>
				<p>The "Counter" button is updating in home.js, using useState</p>
			</div>
			<button onClick={props.settoggle}>Toggle Settings</button>
			<div>
				<p>The "Toggle Settings" button is updating Settings link on Navigation.js from a button inside Home.js</p>
			</div>
		</div>
	);
}

export default Home;