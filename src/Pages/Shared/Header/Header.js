import { Container, Grid } from '@mui/material';
import { height } from '@mui/system';
import React from 'react';

const Header = () => {
    return (

        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <img style={{ width: '90%', height: '650px' }} src="https://toptenzilla.com/wp-content/uploads/2018/09/mens-lapel-pins.jpeg" alt="" />

            </Grid>

        </Grid>

    );
};

export default Header;