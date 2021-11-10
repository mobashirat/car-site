import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';


const backbg = {
    backgroundColor: 'black',
    color: 'white'

}
//icon style

const istyle = {
    paddingRight: 10,
    color: 'white',
    fontSize: 30,
    marginTop: 2
}


const Footer = () => {
    return (
        <Container style={backbg}>
            <Box sx={{ width: '100%', my: 7 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={3}>
                        <Typography>
                            <h2 style={{ textAlign: 'center', paddingTop: '30px ', color: 'red' }}>ROYAL MOTORS</h2>


                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{ listStyle: 'none', textAlign: 'justify', my: 2 }}>
                            <h3 style={{ color: 'red ' }}>Services</h3>
                            <li>about us</li>
                            <li>terms of uses</li>
                            <li>refund policy</li>
                            <li>terms of advertising</li>

                            <li>FAQ</li>

                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{ listStyle: 'none', textAlign: 'justify', my: 2 }}>
                            <h3 style={{ color: 'red ' }}>Our health</h3>
                            <li>sell your car</li>

                            <li>insurance</li>
                            <li>compare cars</li>
                            <li>privacy policy</li>
                            <li>help</li>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{ listStyle: 'none', textAlign: 'justify', my: 2 }}>
                            <h4 style={{ fontWeight: 500, color: 'red' }}>follow us</h4>
                            <i style={istyle} class="fab fa-facebook"></i>
                            <i style={istyle} class="fab fa-google-plus-g"></i>
                            <i style={istyle} class="fab fa-twitter-square"></i>
                            <li style={{ marginTop: 20 }}>call now</li>
                            <Button sx={{ backgroundColor: 'red ' }} variant="contained">+46782731757</Button>
                        </Typography>


                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Footer;