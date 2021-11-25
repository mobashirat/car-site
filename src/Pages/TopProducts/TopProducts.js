import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TopProduct from '../TopProduct/TopProduct';

const TopProducts = () => {
    const [topProducts, setTopProducts] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setTopProducts(data))
    }, [])
    return (
        <Container sx={{ my: 5 }}>
            <Typography sx={{ fontWeight: 500, color: 'blue', m: 3 }} variant="h6" component="div">
                OUR PRODUCTS
            </Typography>
            <Grid container spacing={2}>


                {
                    topProducts?.slice(4).map(topProduct => <TopProduct
                        key={topProduct.id}
                        topProduct={topProduct}
                    ></TopProduct>)

                }


            </Grid>
        </Container>
    );
};

export default TopProducts;