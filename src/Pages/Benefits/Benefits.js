import React from 'react';


import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';





import { Container } from '@mui/material';

const Benefits = () => {
    return (
        <Container>
            <Typography component="div" variant="h5">
                Our Benefits for free
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ display: 'flex', height: '100%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        Customer Service 24/7
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        You can come anytime with your car related problems to us.
                                    </Typography>
                                </CardContent>

                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                image="https://i.ibb.co/XjBtPfx/document-2.png"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ display: 'flex', height: '100%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        Free Documentation
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        You will get free docomentation from us without any conditions
                                    </Typography>
                                </CardContent>

                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                image="https://i.ibb.co/NrsR9k2/document-1.png"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ display: 'flex', height: '100%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        Auto Loan Facility
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        If you need loan for car we have friendly loan policy for you.
                                    </Typography>
                                </CardContent>

                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                image="https://i.ibb.co/93BL9rf/car-loan.png"
                            />
                        </Card>
                    </Grid>


                </Grid>
            </Box>
        </Container>
    );
};

export default Benefits;

