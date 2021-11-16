import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrder.css';

const MyOrder = () => {
	const [orders, setOrder] = useState([]);
	const { user } = useAuth();

	useEffect(() => {
		fetch(`https:/frozen-crag-17113.herokuapp.com/myOrder/${user.email}`)
			.then((res) => res.json())
			.then((data) => setOrder(data));
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
				const remaining = orders.filter((order) => order._id !== id);
				setOrder(remaining);
			});
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<h2>Total Order : {orders?.length}</h2>
			<Container>
				<Grid
					container
					spacing={{ xs: 1, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}>
					{orders.map((order) => (
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
										image={order.img}
										alt="Paella dish"
									/>
									<Typography variant="h5" component="div">
										{order.name}
									</Typography>
									<Typography sx={{ mb: 1.5 }} color="text.secondary">
										${order.price}
									</Typography>
									<Typography variant="body2">{order.email}</Typography>
								</CardContent>
								<CardActions>
									<Button onClick={() => handleDelete(order._id)}>
										Delete
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default MyOrder;
