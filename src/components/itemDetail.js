import React, { useState, useEffect } from 'react'
import '../App.css';

const useFetch = (url) => {
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState({});
	
	useEffect( async () => {
		await fetch(url)
		.then(res => res.json())
		.then((data) => {
			setData(data);
			setLoading(false);
			console.log("ye")
			console.log(data)
		})
		.catch(error => console.log('ERROR'))
	}, []);

	return {data, loading}
}

function ItemDetail({ match }) {
	const {data, loading} = useFetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);

	if (loading) return <h3>...loading</h3>

	return (
		<div>
			<h2>Item</h2> 
			<h1>{ data.data.item.name }</h1>
			<h5>{ data.data.itemId}</h5>
			<img alt="Img" src={data.data.item.images.background} />
			<p>{ data.data.item.description}</p>
		</div>
	);
}

export default ItemDetail;