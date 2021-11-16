import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import useProduct from '../../../hooks/useProduct';



const Services = () => {

    const [products, setProducts] = useProduct();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <h2 style={{ color: 'gray' }}>Our Products</h2>
            <Container>
                <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.slice(0, 6).map(product => <Service
                            key={product._id}
                            product={product}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;