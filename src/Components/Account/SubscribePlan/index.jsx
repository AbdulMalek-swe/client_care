import { Check } from '@mui/icons-material';
import { Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { purchaseStyle } from 'Components/designComponants/purchasePlan';
import React, { useState } from 'react';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const SubscribePlan = () => {
    const style = purchaseStyle();
    const data = [1,23,4,5,6,7]
    return (
        <Box>
             <Link className='back-btn' to="/account">
          <Button> <ArrowBackIcon />Back</Button>
      </Link>
            <Container>
                <Box align="center" className={style.planHeader}>
                   
                    <Box className="btnGroup" align="center">
                        <Button className='planBtn'   >
                            <StoreOutlinedIcon className='planIcon' />
                            <Typography variant="h6" component="h6">Interprize</Typography>
                            <Typography  >purchase for plan</Typography>
                        </Button>
                        <Button className='planBtn'   >
                            <StoreOutlinedIcon className='planIcon' />
                            <Typography variant="h6" component="h6">Professional</Typography>
                            <Typography  >purchase for plan</Typography>
                        </Button>
                        <Button className='planBtn'   >
                            <StoreOutlinedIcon className='planIcon' />
                            <Typography variant="h6" component="h6">Free</Typography>
                            <Typography  >purchase for plan</Typography>
                        </Button>
                    </Box>
                </Box>
                <Box >
                <Grid container  spacing={4} className={style.root}  >
                {data.map(item=>
                <Grid alignItems="center" item xs={12} sm={6} md={4} > 
               <Box className="table premium">
                        <Box className='ribbon '>
                            <Typography className='recText'>Recommend</Typography>
                        </Box>
                        <Box className="priceSection" >
                            <Box className="priceArea">
                                <Box className="innerArea">
                                    <Typography className='text'>$</Typography>
                                    <Typography className='price'>59</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="anotherPackage">
                        </Box>
                        <List className='featuresList'>
                            <ListItem className='featureItem'>
                                <Typography variant="body1" className='listName'>Five Existing Templates</Typography>
                                <ListItemIcon className='featureIcon'>
                                    <Check />
                                </ListItemIcon>
                            </ListItem>
                            <ListItem className='featureItem'>
                                <Typography variant="body1" className='listName'>Five Existing Templates</Typography>
                                <ListItemIcon className='featureIcon'>
                                    <Check />
                                </ListItemIcon>
                            </ListItem>
                            <ListItem className='featureItem'>
                                <Typography variant="body1" className='listName'>Five Existing Templates</Typography>
                                <ListItemIcon className='featureIcon'>
                                    <Check />
                                </ListItemIcon>
                            </ListItem>
                        </List>
                        <Box className="btn">
                            <Button
                                className='purchaseBtn'
                                variant="contained"
                                color="primary"
                            >
                                Purchase
                            </Button>
                        </Box>
                        </Box>
                    </Grid>
                    )}
                </Grid>
                    
                 
                </Box>
            </Container>
        </Box>
    );
};

export default SubscribePlan;