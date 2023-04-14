import { Box } from '@mui/system';
import React from 'react';
import { Button, Container, Divider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Gmb from './Gmb';
import Gmail from './Gmail';
import Youtube from './Youtube';
import { careStyle } from 'designTypes/care';
const Care = () => {
    const style = careStyle();
    const [alignment, setAlignment] = React.useState('gmail');
    const handleAlignment = (event, newAlignment) => {
      if (newAlignment !== null) {
        setAlignment(newAlignment);
      }
    };
    return (
        <Box sx={{ paddingY: '104px' }}>
            <Box className={style.root}>
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    className={style.root}
                    >
                    <ToggleButton value='gmail'>Gmail Care</ToggleButton>
                    <ToggleButton value='youtube'>youtube care</ToggleButton>
                    <ToggleButton value='gmb'>gmb care</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Divider className={style.border} />
            <Box sx={{ paddingY: '44px' }}>
                 <Container>
                 {
                   ( alignment.includes('gmb') && <Gmb/>)|| (alignment.includes('gmail')&&<Gmail/> )||(alignment.includes('youtube')&&<Youtube/>) 
                 }
                 </Container>
            </Box>
        </Box>
    );
};

export default Care;