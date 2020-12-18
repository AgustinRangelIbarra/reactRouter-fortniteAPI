import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function Shop() {
	useEffect(() => {
		fetchItems();
	}, [])

	const [items, setItems] = useState([]);

	const fetchItems = async () => {
		const data = await fetch(
			'https://fortnite-api.theapinetwork.com/store/get'
		);
		
		const items = await data.json();
		console.log(items.data);
		setItems(items.data);
	}

  	return (
		  <div>
			  <h3>Shop</h3>
			  {
				  items.map(item => (
						<h5 key={item.itemId}>
							<Link to={`/shop/${item.itemId}`} >
								{item.item.name}
							</Link>
						</h5>
					))
			  }
		  </div>
  	);
}

export default Shop;
