import { useEffect, useState } from 'react';

const useProduct = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('https:/frozen-crag-17113.herokuapp.com/products')
			.then((res) => res.json())
			.then((data) => setProducts(data));
		console.log(products);
	}, []);
	console.log(products);

	return [products, setProducts];
};

export default useProduct;
