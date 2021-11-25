import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Booking from '../Booking/Booking';

const TopProduct = ({ topProduct }) => {
    const { name, img, describtion, price } = topProduct;

    return (
        <>

            <Grid item xs={12} md={4} >
                <Card sx={{ minWidth: 275, border: 1, boxShadow: 7, height: '100%' }}>
                    <CardMedia
                        component="img"
                        style={{ width: '100%', height: '60%', margin: 'auto' }}
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent sx={{ marginBottom: 10 }}>

                        <Typography variant="h5" component="div">
                            {name}
                        </Typography>

                        <Typography sx={{ marginBottom: 0, textAlign: 'center' }} variant="body2" color="text.secondary">
                            {describtion}
                            <br />

                        </Typography>
                        <Typography variant="h5" component="div">
                            {price}
                        </Typography>
                        <Link to={`/booking/${topProduct._id}`}>
                            <Button sx={{ marginTop: 3, marginBottom: 6 }} variant="contained">Book now</Button>
                        </Link>
                    </CardContent>

                </Card>
            </Grid>

        </>
    );
};

export default TopProduct;