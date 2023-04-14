import { Button, Grid, List, ListItem, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import { footerStyle } from '../../../designTypes/footer';
import img from '../../../assets/client_care.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    const style = footerStyle()
    return (
        <React.Fragment>
            <Box className={style.root}>
                <Container>
                    <Grid container spacing={6}>
                        <Grid item sm={12} md={5}>
                            <img src={img} alt='loading...' width='50%' height='80px' />
                            <Typography>
                                The Game-Changing Platform for Business Management and customer service.
                            </Typography>
                            <Typography>
                                254 Chapman Rd, Ste 208 #11318 Newark
                                Delaware 19702
                            </Typography>
                        </Grid>
                        <Grid item sm={12} md={7}>
                            <Box>
                                <Typography component='h3' variant='h3'>
                                    SOLUTIONS
                                </Typography>
                                <List>
                                    <Link>
                                        <ListItem>
                                            <span>Gmail Care AI

                                            </span>
                                        </ListItem>
                                    </Link>
                                    <Link>
                                        <ListItem>
                                            <span>
                                                YouTube Care AI
                                            </span>
                                        </ListItem>
                                    </Link>
                                    <Link>
                                        <ListItem>
                                            <span>
                                                GMB Care AI
                                            </span>
                                        </ListItem>
                                    </Link>
                                    <Link>
                                        <ListItem>
                                            <span>
                                                WordPress Care AI
                                            </span>
                                        </ListItem>
                                    </Link>
                                    <Link>
                                        <ListItem>
                                            <span>
                                                whatsApp Care AI
                                            </span>
                                        </ListItem>
                                    </Link>
                                    <Link>
                                        <ListItem>
                                            <span>
                                                Instagram Care AI
                                            </span>
                                        </ListItem>
                                    </Link>
                                    <Link>
                                        <ListItem>
                                            <span> I
                                                Facebook Care AI</span>
                                        </ListItem>
                                    </Link>

                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ textAlign: 'center', padding: '50px 0px' }}>
                        <span>© 2023 clientcare.ai</span>
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    );
};

export default Footer;