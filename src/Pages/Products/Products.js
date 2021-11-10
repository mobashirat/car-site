import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container sx={{ my: 5 }}>
            <Typography sx={{ fontWeight: 500, color: 'blue', m: 3 }} variant="h6" component="div">
                OUR PRODUCTS
            </Typography>
            <Grid container spacing={2}>


                {
                    products?.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)

                }


            </Grid>
        </Container>
    );
};

export default Products;