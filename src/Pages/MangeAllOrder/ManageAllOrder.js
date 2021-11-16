import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ShowAllOrder from '../ShowAllOrder/ShowAllOrder';

const ManageAllOrder = () => {
	const [allOrder, setAllOrder] = useState([]);

	useEffect(() => {
		fetch('https:/frozen-crag-17113.herokuapp.com/myOrder')
			.then((res) => res.json())
			.then((data) => setAllOrder(data));
	}, []);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<h2>Total Order : {allOrder?.length}</h2>
			<Container>
				<Grid
					container
					spacing={{ xs: 1, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}>
					{allOrder.map((order) => (
						<ShowAllOrder key={order._id} order={order}></ShowAllOrder>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default ManageAllOrder;
