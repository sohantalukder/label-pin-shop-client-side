import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import useReviews from '../../hooks/useReviews';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <Box sx={{ flexGrow: 1 }} style={{ margin: '50px' }}>
            <h2 style={{ color: 'gray', margin: '40px' }}>Our Reviews</h2>
            <Container>
                <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review => (

                            <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={4} sm={4} md={4}>
                                <Card sx={{ minWidth: 300 }}>
                                    <CardContent>
                                        <CardMedia
                                            component="img"
                                            height="180"

                                            image={review.picture}
                                            alt="Paella dish"
                                        />
                                        <Typography variant="h5" component="div">
                                            {review.name}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {review.email}
                                        </Typography>
                                        <Typography variant="body2">
                                            {review.about}

                                        </Typography>
                                    </CardContent>

                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;