import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useStyle } from 'designTypes/tools';
import React from 'react';
 
const Index = () => {
    const style = useStyle();
    return (
       <Box sx={{paddingY:'104px' }}>
        <Container>
              <Box>
                <Typography variant='h2' component='h2' className={style.root}>CLIENT CARE <span>AI-POWERED</span> TOOLS</Typography>
              </Box>
        </Container>
       </Box>
    );
};

export default Index;