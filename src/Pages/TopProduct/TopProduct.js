import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import "./TopProduct.css"
import { Link } from 'react-router-dom';


const TopProduct = ({ topProduct }) => {
    const { name, img, describtion, price } = topProduct;

    return (
        <>

            <Grid item xs={12} md={4} >
                <Card sx={{ minWidth: 205, border: 3, boxShadow: 10, height: '100%', backgroundColor: 'black', color: 'white', borderRadius: 10 }}>
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

                        <Typography sx={{ marginBottom: 0, textAlign: 'center' }} variant="body2" color="text.light">
                            {describtion}
                            <br />

                        </Typography>
                        <Typography variant="h5" component="div" sx={{ fontWeight: 800, pt: 1, color: 'red' }}>
                            {price}
                        </Typography>
                        <Link style={{ textDecoration: 'none' }} to={`/booking/${topProduct._id}`}>
                            <Button sx={{ marginTop: 3, marginBottom: 8, backgroundColor: 'gray', color: 'black', fontWeight: 800 }} variant="contained">Book now</Button>
                        </Link>
                    </CardContent>

                </Card>
            </Grid>

        </>
    );
};

export default TopProduct;