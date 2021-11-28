import React from 'react';

import carbg from '../../images/carbg.jpg'
import Box from '@mui/material/Box';
import { Typography, Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import LightSpeed from 'react-reveal/LightSpeed';
import Slide from 'react-reveal/Slide';

const backimg = {
    backgroundImage: `url(${carbg})`,
    backgroundRepeat: 'no-repeat',

    backgroundSize: 'cover',
    marginTop: 20,


}
const vert = {
    display: 'flex',
    height: 450,
    alignItems: 'center'

}

const Banner = () => {
    return (
        <Container style={backimg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...vert, textAlign: 'left' }} xs={12} md={8}>
                    <Box>
                        < LightSpeed right> <Typography variant="h3" sx={{ color: 'white', fontWeight: 700 }}>
                            ROYAL <span style={{ color: 'red' }}>MOTORS</span> <br />

                        </Typography></ LightSpeed>


                        <Slide left> <Typography variant="h3" sx={{ my: 5, fontSize: 18, color: 'gray', fontWeight: 500 }}>
                            Welcome to our website ROYAl MOTORS.Here you will get your desire brand new  cars with detailed information.Please check it out grab your favourite one.
                        </Typography></Slide>
                        <Button style={{ backgroundColor: 'red ', color: 'white', paddingRight: 20 }}>Learn more</Button>
                    </Box>

                </Grid>
                <Grid item xs={12} md={4} style={vert}>

                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;