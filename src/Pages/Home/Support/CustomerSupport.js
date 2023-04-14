import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { supportStyle } from 'designTypes/support';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/herosection.gif'
const CustomerSupport = () => {
    const style = supportStyle()
    return (
        <Box sx={{ marginBottom: "200px" }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item sm={12} md={7} >
                        <Box className={style.root}>
                            <Typography variant='h2' component='h2'>
                                Say Hello to Effortless Customer Support

                            </Typography>
                            <Typography  >
                                Are you ready to take the hassle out of customer service?<br/>
                                Look no further than <strong>Client Care</strong>  – th e smartest, easiest way to manage customer inquiries.
                                Our powerful SaaS platform employs <strong>AI-powered tools</strong> to automatically handle everything from basic queries to complex issues, so you can focus on what really matters: growing your business.
                                AI is revolutionizing <strong>customer service</strong>, bringing efficiency and precision to the forefront. By automating repetitive tasks and offering personalized solutions, Client Care platform empower businesses to deliver exceptional support. Embracing these advancements, companies can now forge stronger customer relationships, reduce response times, and enhance overall satisfaction, ushering in a new era of seamless, customer-centric experiences.
                                With <strong>Client Care</strong>, you’ll streamline your support system, boost productivity, and provide top-notch service to your customers. <strong>Sign up for our free trial today and see the difference for yourself.</strong>
                            </Typography>
                            <Box className='supportBtn'>
                                <Link>
                                <Button variant="outlined" sx={{ background: "#052591",marginBottom: '32px' }}>Support  </Button>
                       
                                </Link>
                                <Link>
                                <Button variant="outlined" sx={{ marginLeft: "12px", marginBottom: '32px' }} >Free trial  </Button>
                                </Link>
                                
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={5} >
                   <Box className={style.img}>
                   <img alt='loading...' src={img} width="80%"/>
                   </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CustomerSupport;