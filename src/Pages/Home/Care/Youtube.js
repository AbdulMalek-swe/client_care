import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { careStyle } from '../../../designTypes/care';
import img from '../../../assets/YOUTUBE-CARE-1024x790.png'
const Youtube = () => {
    const style = careStyle();
    return (
        <React.Fragment>
            <Grid container >
                <Grid container item sm={6} xs={12} >
                    <Grid xs={12}>
                        <Box className={style.careHeading}>
                            <Typography component='h2'>
                                <h2>Automate and Personalize Your</h2>
                            </Typography>
                            <Typography  >
                                <h2>Email Responses with Gmail Care AI</h2>
                            </Typography>
                            <Typography  >
                                <span><strong>AI-Powered Support for Your GMAIL, POP3, and IMAP Inbox</strong></span>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid md={6} sm={12}>
                        <Typography className={style.text}>
                            <strong> Gmail Care AI</strong> is the ultimate solution for businesses looking to automate and personalize their email responses.
                        </Typography>
                    </Grid>
                    <Grid md={6} sm={12}>
                        <Typography className={style.text}>
                            <strong> Gmail Care AI</strong> is the ulti onalize their email responses.
                        </Typography>
                    </Grid>
                    <Grid md={6} sm={12}>
                        <Typography className={style.text}>
                            <strong> Gmail Care AI</strong> is the ultimate solution for businesses looking to automate and
                        </Typography>
                    </Grid>
                    <Grid md={6} sm={12}>
                        <Typography className={style.text}>
                            <strong> Gmail Care AI</strong> is the ultimate solution for businesses looking to automate and personalize their email responses.
                        </Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Box>
                            <Button variant="outlined" sx={{ background: "#052591",marginBottom: '32px' }}>Outlined   </Button>
                            <Button variant="outlined" sx={{ marginLeft: "12px", marginBottom: '32px' }} >Outlined   </Button>
                        </Box>
                    </Grid>
                </Grid>

                <Grid item sm={6} xs={12}>
                    <Box className={style.background}>
                        <img alt="Loading..." src={img} width="100%" />
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Youtube;