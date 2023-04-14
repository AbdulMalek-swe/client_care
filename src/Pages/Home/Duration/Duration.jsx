import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { durationStyle } from 'designTypes/duration';
import React from 'react';
 
const Duration = () => {
    const style = durationStyle();
    return (
        <React.Fragment>
            <Box >
                <Container>
                    <Box className={style.root}>
                        <Typography variant='h2' component='h2'>Available in the next</Typography>
                        <Typography component='div'>
                           <p>
                             <strong>152: </strong>
                             <span>days</span>
                           </p>
                           <p>
                             <strong> 152: </strong>
                             <span>days</span>
                           </p>
                           <p>
                             <strong> 152: </strong>
                             <span>days</span>
                           </p>
                           <p>
                             <strong>152</strong>
                             <span>days</span>
                           </p>
                        </Typography>
                    </Box>
                </Container>

            </Box>
        </React.Fragment>
    );
};

export default Duration;