import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const ShowAllOrder = (props) => {
	const [manageOrder, setManageOrder] = useState([]);

	const { user } = useAuth();

	useEffect(() => {
		fetch(`https:/frozen-crag-17113.herokuapp.com/myOrder/${user.email}`)
			.then((res) => res.json())
			.then((data) => setManageOrder(data));
	}, []);

	const handleDelete = (id) => {
		const url = `https:/frozen-crag-17113.herokuapp.com/myOrder/${id}`;
		fetch(url, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				alert('Do you want to delete it , Permanently??');
				console.log(data);
				console.log(id);
				const remaining = manageOrder.filter((manOrder) => manOrder._id !== id);
				setManageOrder(remaining);
			});
	};

	const { name, username, email, price, img, _id } = props.order;

	return (
		<Grid
			sx={{ display: 'flex', justifyContent: 'center' }}
			item
			xs={4}
			sm={4}
			md={4}>
			<Card sx={{ minWidth: 300 }}>
				<CardContent>
					<CardMedia
						component="img"
						height="180"
						image={img}
						alt="Paella dish"
					/>
					<Typography variant="h5" component="div">
						{name}
					</Typography>
					<Typography sx={{ mb: 1.5 }} color="text.secondary">
						${price}
					</Typography>
					<Typography variant="body2">{email}</Typography>
				</CardContent>
				<CardActions>
					<Button onClick={() => handleDelete(_id)}>Delete</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default ShowAllOrder;
