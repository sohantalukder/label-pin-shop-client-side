import { Container, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useProduct from '../../hooks/useProduct';
import './Purchase.css';

const Purchase = () => {
	const [products, setProducts] = useProduct();
	const { productId } = useParams();
	const [detailProduct, setDetailProduct] = useState({});

	const { user } = useAuth();
	console.log(user);
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		data.name = `${detailProduct.name}`;
		data.price = `${detailProduct.price}`;

		data.img = `${detailProduct.img}`;

		axios
			.post('https:/frozen-crag-17113.herokuapp.com/myOrder', data)

			.then((res) => {
				if (res.data.insertedId) {
					alert('Added Successfully!!');
				}
				reset();
			});
	};

	useEffect(() => {
		const findService = products.find((product) => product._id === productId);
		setDetailProduct(findService);
		console.log(detailProduct);
	}, [products]);
	return (
		<Container>
			<h4 style={{ color: 'gray' }}>PLACE YOUR ORDER</h4>
			<Grid container spacing={2} className="my-order">
				<Grid item xs={12} md={6}>
					<p> {detailProduct?.name}</p>
					<p>Address: {detailProduct?.address}</p>
					<p>Fee: ${detailProduct?.price}</p>
					<img style={{ width: '75%' }} src={detailProduct?.img} alt="" />
				</Grid>
				<Grid item xs={12} md={6} className="my-order-form">
					<form onSubmit={handleSubmit(onSubmit)}>
						<h2>Add Your Information</h2>
						<input {...register('Username')} defaultValue={user?.displayName} />
						<input {...register('email')} defaultValue={user?.email} />
						<input {...register('address')} placeholder="Address" />
						<input {...register('country')} placeholder="Country" />
						<input {...register('city')} placeholder="City" />
						<input type="submit" value="Place Order" />
					</form>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Purchase;
