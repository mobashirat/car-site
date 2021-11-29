import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TopProduct from '../TopProduct/TopProduct';
import Roll from 'react-reveal/Roll';

const TopProducts = () => {
    const [topProducts, setTopProducts] = useState([])


    useEffect(() => {
        fetch('https://obscure-springs-61189.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setTopProducts(data))
    }, [])
    return (
        <Container sx={{ my: 5 }}>
            <Roll> <Typography sx={{ fontWeight: 800, color: 'red', m: 3 }} variant="h3" component="div">
                OUR TOP PRODUCTS
            </Typography></Roll>
            <Grid container spacing={2}>


                {
                    topProducts?.slice(0, 6).map(topProduct => <TopProduct
                        key={topProduct.id}
                        topProduct={topProduct}
                    ></TopProduct>)

                }


            </Grid>
        </Container>
    );
};

export default TopProducts;