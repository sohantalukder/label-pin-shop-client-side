import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';
import Footer from '../../Shared/Footer/Footer';

const Explores = () => {
    const [products, setProducts] = useProduct();
    console.log(products);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <h2 style={{ color: 'gray' }}>Explore All Products</h2>
            <Container>
                <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => (

                            <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={4} sm={4} md={4}>
                                <Card sx={{ minWidth: 300 }}>
                                    <CardContent>
                                        <CardMedia
                                            component="img"
                                            height="180"

                                            image={product.img}
                                            alt="Paella dish"
                                        />
                                        <Typography variant="h5" component="div">
                                            {product.name}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            ${product.price}
                                        </Typography>
                                        <Typography variant="body2">
                                            {product.address}

                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link style={{ textDecoration: 'none' }} to={`/purchase/${product._id}`}>
                                            <Button size="small">Purchase</Button>
                                        </Link>

                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
            <Footer></Footer>
        </Box>

    );
};

export default Explores;