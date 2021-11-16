import {
	faAddressBook,
	faFileContract,
	faHome,
	faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid } from '@mui/material';
import React from 'react';
import './Footer.css';

const Footer = () => {
	const element = <FontAwesomeIcon icon={faMoneyBill} />;
	const element2 = <FontAwesomeIcon icon={faAddressBook} />;
	const element3 = <FontAwesomeIcon icon={faFileContract} />;
	const element4 = <FontAwesomeIcon icon={faHome} />;
	return (
		<Grid container spacing={2} className="container-footer">
			<Grid item xs={12} md={4}>
				<p>{element} Men's Lapel Pin Shop</p>
				<h5>{element2} 0172524295*</h5>

				<small>{element4} H:202 R:45 Sector:10</small>
				<p>Uttara Dhaka 1230</p>
			</Grid>
			<Grid item xs={12} md={4}>
				<p>Home {element4}</p>
				<p>Services </p>
				<p>Contact us {element2} </p>
				<p>About us</p>
				<p>Reviews</p>
			</Grid>
			<Grid item xs={12} md={4}>
				SUPPORT Troubleshooting <br />
				Common Questions Report a Bug Get Help <br /> <br /> <br />
				<p> Shohan 2021 © . All rights reserved. </p>
			</Grid>
		</Grid>
	);
};

export default Footer;
