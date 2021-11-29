import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import AllReview from '../AllReview/AllReview';
import Wobble from 'react-reveal/Wobble';

const AllReviews = () => {
    const [allreviews, setAllreviews] = useState([])

    useEffect(() => {
        fetch('https://obscure-springs-61189.herokuapp.com/allreviews')
            .then(res => res.json())
            .then(data => setAllreviews(data))
    }, [])
    return (
        <Container>
            <Wobble>  <Typography sx={{ color: "green", my: 5, pt: 3, fontWeight: 700 }} variant="h3">Reviews from Our Happy Clients,</Typography></Wobble>



            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>


                    {
                        allreviews?.map(allreview => <AllReview
                            key={allreview.name}
                            allreview={allreview}
                        >

                        </AllReview>)
                    }
                </Grid>
            </Box>

        </Container>
    );
};

export default AllReviews;