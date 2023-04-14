import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { cardStyle } from 'designTypes/careCard';
import React from 'react';
 
import { cardData } from './cardData';

const CareCard = () => {
    const style = cardStyle();
    return (
        <React.Fragment>

            <Box sx={{ paddingY: '200px' }}>
                <Container>
                    <Grid container spacing={14} >
                        {
                            cardData.map((item) =>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Typography component='div' className={style.root}>
                                        <img
                                            component="img"
                                            src={item.img}
                                            alt="loading..."
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h5">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2"  >
                                                {item.descr}
                                            </Typography>
                                        </CardContent>
                                        <CardActions className='btn' >
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Typography>
                                </Grid>
                            )
                        }

                    </Grid>
                </Container>
            </Box>
        </React.Fragment >
    );
};

export default CareCard;