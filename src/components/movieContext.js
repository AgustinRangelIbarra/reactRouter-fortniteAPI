import React , { useState, createContext } from 'react'

// Outside the component
export const MovieContext = createContext ();


export const MovieProvider = (props) => {
	const [movies, setmovies] = useState([
		{
		  name: 'Harry Potter',
		  price: '10',
		  id: 10001
		},
		{
		  name: 'Game of Thrones',
		  price: '10',
		  id: 10002 
		},
		{
		  name: 'Inception',
		  price: '10',
		  id: 10003
		}
	]);

	return (
		<MovieContext.Provider value={[movies, setmovies]}>
			{props.children}
		</MovieContext.Provider>
	);
}