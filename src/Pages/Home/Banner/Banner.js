import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import OutboundIcon from '@mui/icons-material/Outbound';
import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import heroAnime from '../../../assets/herosection.gif'
const Banner = () => {
    return (
        <Box sx={{ paddingY: "200px", background: "rgb(7 31 139 / 97%)" }}>
            <Container>
                <Grid container direction="row"
                    justifyContent="center"
                    alignItems="center" spacing={4}>
                    <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                        <Typography variant="h2" component="h2" sx={{ fontSize: '21px',   color: '#ffffff', lineHeight: '30px' }}>
                            Our AI-powered platform is designed to assist businesses in managing and responding to customer queries and requests in real-time.

                        </Typography>
                        <Typography variant='h1' component="h2" sx={{
                            marginTop: '0px',
                            marginBottom: '10px',
                            fontSize: '48px',
                            lineHeight: '70px',
                            fontWeight: '700',
                           
                            color: '#ffffff'
                        }}>
                            Revolutionize Your Customer Service
                            with Client Care
                        </Typography>
                        <Typography variant="h2" component="h2" sx={{ fontSize: '21px',   color: '#ffffff', lineHeight: '30px' ,paddingBottom:"20px" }}>
                            Automated & Personalized Support
                            for Your Customers 24/7 !
                        </Typography>
                        <Button variant="outlined" sx={{background:"white"}}>Try Now <OutboundIcon/> </Button>
                        <Button variant="outlined" sx={{marginLeft:"12px"}} >Watch Video<PlayCircleFilledIcon/> </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
                        <img alt="Loading..." src={heroAnime} width="100%" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;