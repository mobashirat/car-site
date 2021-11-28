import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Zoom from 'react-reveal/Zoom';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container sx={{ m: 'auto' }}>
            <Typography sx={{ fontWeight: 800, color: 'red', m: 3, fontSize: 28 }} variant="h6" component="div">
                <Zoom left cascade>ALL PRODUCTS</Zoom>
            </Typography>
            <Grid container spacing={2}>


                {
                    products?.map(product => <Product
                        key={product.id}
                        product={product}

                    >

                    </Product>)

                }


            </Grid>
        </Container>
    );
};

export default Products;