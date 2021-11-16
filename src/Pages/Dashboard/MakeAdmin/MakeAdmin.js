import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);
	// const { token } = useAuth();

	const handleOnBlur = (e) => {
		setEmail(e.target.value);
	};

	const handleAdminSubmit = (e) => {
		const user = { email };
		console.log(user);
		fetch('https:/frozen-crag-17113.herokuapp.com/users/admin', {
			method: 'PUT',
			headers: {
				// 'authorization': `Bearer ${token}`,
				'content-type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					console.log(data);
					setSuccess(true);
				}
			});

		e.preventDefault();
	};
	return (
		<div>
			<form onSubmit={handleAdminSubmit}>
				<TextField
					name="email"
					label="Email"
					type="email"
					onBlur={handleOnBlur}
					variant="standard"
				/>
				<Button type="submit" variant="contained">
					Make Admin
				</Button>
			</form>
			<h3 style={{ color: 'gray' }}>
				Reminder: Only an admin can add new Admins
			</h3>

			{success && <Alert severity="success">Made admin successfully</Alert>}
		</div>
	);
};

export default MakeAdmin;
