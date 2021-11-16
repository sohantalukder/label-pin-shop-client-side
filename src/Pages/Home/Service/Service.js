import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { img, price, name, address, _id } = props.product;
    return (

        <Grid sx={{ display: 'flex', justifyContent: 'center' }} item xs={4} sm={4} md={4}>
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
                    <Typography variant="body2">
                        {address}

                    </Typography>
                </CardContent>
                <CardActions>
                    <Link style={{ textDecoration: 'none' }} to={`/purchase/${_id}`}>
                        <Button size="small">Purchase</Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Service;