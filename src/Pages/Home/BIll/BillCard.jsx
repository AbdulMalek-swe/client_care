import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import React from 'react';
import { Link } from 'react-router-dom';
import { billData } from './billData';
import { billStyle } from 'designTypes/bill';

const BillCard = () => {
    const style = billStyle();
    return (
        <React.Fragment>
            <Box className={style.card}>
                <Box className="headerText">
                    <Typography variant='h2' component='h2'>
                        BILLED <span>MONTHLY</span>
                    </Typography>
                    <Typography >
                        Experience Our Services Risk-Free with Our 30-Day Money-Back Guarantee.<br />
                        To learn more, explore Client Care <Link to="/refund-policy">Refund Policy.</Link>
                    </Typography>
                    <Typography >
                        Join us today and experience the difference our AI-powered tools can make.<br />
                        Discover the confidence that comes with choosing a partner who truly has your best interests at heart.
                    </Typography>
                </Box>
                <Box>
                    <Grid container spacing={2} >
                           {
                            billData.map((item,i)=>   <Grid item md={3} sm={6} xs={12} key={i}><Card className='cardHeader'  >
                            <CardContent>
                                <Typography variant='h2' component='h2' >
                                  {item.name}
                                </Typography>
                                <Typography variant="h5" component="h5">
                                    $85 <span>/month</span>
                                </Typography>
                                <Typography variant="h4" component='h4'dangerouslySetInnerHTML={{__html: item.header}}>
                                </Typography>
                                <Typography variant="h4" component='h4' dangerouslySetInnerHTML={{__html: item.sub}}>
                                   
                                </Typography>
                                <Typography component='div' variant='div'>
                                    {
                                        item.list.map((items,i)=><Typography key={i}>
                                            {items.icon === '<CancelIcon />'?<CancelIcon />: <CheckCircleSharpIcon/>}
                                                <span>
                                                   {items.text}
                                                    
                                                </span>
                                            </Typography>)
                                    }
                                    

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card> </Grid>)
                           }
                       
                    </Grid>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default BillCard;