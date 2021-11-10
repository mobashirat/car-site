import React from 'react';

import carbg from '../../images/carbg.jpg'
import Box from '@mui/material/Box';
import { Typography, Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid';

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
                        <Typography variant="h3" sx={{ color: 'white', fontWeight: 700 }}>
                            ROYAL MOTORS <br />

                        </Typography>
                        <Typography variant="h6" sx={{ my: 5, fontSize: 12, color: 'white', fontWeight: 300 }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora minus, itaque debitis magni harum ullam maiores maxime, necessitatibus tempore iure doloribus sapiente accusantium culpa obcaecati nam quam eius ipsa. Ducimus.
                        </Typography>
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