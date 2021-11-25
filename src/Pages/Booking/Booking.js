import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';


import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from './../../hooks/useAuth'

const Booking = () => {
    const { serviceId } = useParams();
    const [product, setProduct] = useState([])
    const [bookSuccess, setBookSuccess] = useState(false)
    const { user } = useAuth()
    const initialInfo = { customerName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)

    const handleBookingOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo }
        newInfo[field] = value;
        console.log(newInfo)
        setBookingInfo(newInfo)
    }

    const handleBookSubmit = e => {
        const booking = {
            ...bookingInfo,
            customerName: product?.name
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookSuccess(true)
                }
                console.log(data)
            })
        e.preventDefault()

    }

    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${serviceId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <Container>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={6}>
                        <Card sx={{ display: 'flex', height: '100%', mt: 4 }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        {product?.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {product?.price}
                                    </Typography>
                                </CardContent>

                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: 400 }}
                                image={product?.img}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <form onSubmit={handleBookSubmit}>
                            <h2>Your information</h2>

                            <TextField
                                sx={{ width: '100%', mb: 3 }}
                                id="outlined-size-small"
                                name="customerName"
                                onBlur={handleBookingOnBlur}
                                defaultValue={user.displayName}
                                size="small"
                            />

                            <TextField
                                sx={{ width: '100%', mb: 3 }}
                                id="outlined-size-small"
                                name="email"
                                onBlur={handleBookingOnBlur}
                                defaultValue={user.email}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '100%', mb: 3 }}
                                id="outlined-size-small"
                                name="phone"
                                onBlur={handleBookingOnBlur}
                                placeholder="phone number"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '100%', mb: 3 }}
                                id="outlined-size-small"
                                name="your address"
                                onBlur={handleBookingOnBlur}
                                placeholder="your address"
                                size="small"
                            />
                            <Button type="submit">Order Place</Button>
                        </form>
                        {bookSuccess &&
                            <Alert severity="success">Booked Successfully</Alert>}
                    </Grid>


                </Grid>
            </Box>
        </Container>
    );
};

export default Booking;