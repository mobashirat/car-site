import { CardContent, Typography, Grid, Card, CardMedia } from '@mui/material';
import React from 'react';
import './AllReview.css'

const AllReview = ({ allreview }) => {
    const { name, comments, rating, img } = allreview;
    return (
        <Grid className='content' item xs={12} md={4} >
            <Card sx={{ minWidth: 275, border: 1, boxShadow: 7, height: '80%', backgroundColor: 'black', color: 'white', borderRadius: 10 }}>

                <CardContent sx={{ marginBottom: 10 }}>
                    <CardMedia
                        component="img"
                        style={{ width: '50%', height: '10%', margin: 'auto', borderRadius: 90 }}
                        image={img}

                        alt="green iguana"
                    />
                    <Typography sx={{ mt: 3, color: 'lightblue', fontWeight: 700 }} variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography sx={{ marginBottom: 0, textAlign: 'center', color: 'gray' }} variant="body2">
                        {comments}
                        <br />

                    </Typography>

                    <Typography variant="h5" component="div">
                        <span style={{ color: 'goldenrod', fontWeight: 700 }}> Ratings</span>: {rating}/5
                    </Typography>





                </CardContent>

            </Card>
        </Grid>
    );
};

export default AllReview;