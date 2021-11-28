import { Button, Card, CardContent, CardMedia, Grid, Typography, Box } from '@mui/material';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, describtion, price } = product;

    const [products, setProducts] = useState([])


    const handleDelete = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('are you sure you want to delete it?');
                    const remainingProducts = products?.filter(product => product._id !== id);
                    setProducts(remainingProducts)

                }
            })
        console.log(id)
    }
    return (


        <Grid item xs={12} md={4} >

            <Card sx={{ minWidth: 205, border: 3, borderColor: 'aqua', boxShadow: 5, height: '90%', width: '100%', backgroundColor: 'black', color: 'white', borderRadius: 8 }}>
                <CardMedia
                    component="img"
                    style={{ width: '100%', height: '40%', margin: 'auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent sx={{ marginBottom: 10 }}>

                    <Typography sx={{ mt: 2 }} variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography sx={{ mt: 2, textAlign: 'center', color: 'gray' }} variant="body2">
                        {describtion}
                        <br />

                    </Typography>

                    <Typography sx={{ color: 'goldenrod', mt: 2 }} variant="h5" component="div">
                        {price}
                    </Typography>

                    <Box sx={{ justifyContent: 'space-between', display: 'flex', mb: 2 }}>
                        <Link style={{ textDecoration: 'none' }} to={`/booking/${product._id}`}>
                            <Button sx={{ marginTop: 3, backgroundColor: 'gray', color: 'white' }} variant="contained">Book now</Button>
                        </Link>

                        <Button onClick={() => handleDelete(product?._id)} sx={{ marginTop: 3, color: 'white', backgroundColor: 'red' }} variant="contained">cancel</Button>

                    </Box>
                </CardContent>

            </Card>

        </Grid>


    );
};

export default Product;