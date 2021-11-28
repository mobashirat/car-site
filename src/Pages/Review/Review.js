import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import "./Review.css"
import { Typography, Box, Alert, Container } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const [reviewSuccess, setreviewSuccess] = useState(false)
    console.log(reviewSuccess)

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.email = user?.email;
        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    setreviewSuccess(true)
                }

            })
        console.log(data)
        reset();
    };
    return (
        <Container sx={{ backgroundColor: "black", paddingBottom: 10 }}>
            <Box >
                <Typography>
                    <Typography sx={{ color: "white", my: 5, pt: 3 }} variant="h3"> Place Your Review</Typography>
                    {reviewSuccess && <Alert severity="success">
                        Thank you for your reviews.
                    </Alert>}
                </Typography>


                <div className="form">
                    <form className="reviews" onSubmit={handleSubmit(onSubmit)}>


                        <input

                            {...register("img", { required: true })}

                            defaultValue="https://i.ibb.co/DDh0dTm/pro2.png"


                        />
                        <input
                            {...register("name", { required: true })}
                            placeholder="Your name"


                        />

                        <input className="rating"
                            {...register("rating", { required: true })}
                            placeholder="Your rating out of 5"
                            type='number'

                        />

                        <textarea
                            {...register("comments", { required: true })}
                            placeholder="Add your comments"
                        />


                        {errors.exampleRequired && <Typography>This field is required</Typography>}

                        <input className="submit" type="submit" value="Add Review" color="error" />
                    </form>
                </div>
            </Box >

        </Container>
    );
};

export default Review;