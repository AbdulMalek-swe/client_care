import { Button, Container, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { billStyle } from 'designTypes/bill';
import React from 'react';
import BillCard from './BillCard';
const Bill = () => {
  const style = billStyle();
  const [alignment, setAlignment] = React.useState('monthly');
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  console.log(alignment);
  return (
    <Box sx={{ paddingY: '104px' }}>
      <Container>
        <Box className={style.root}>
          <Typography variant='h2' component='h2' className='textHeader'>UNIQUE & AFFORDABLE PRICING</Typography>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            className={style.root}
          >
            <ToggleButton value='monthly' className={alignment.includes('monthly') ? style.actives : style.inactives}>MONTHLY</ToggleButton>
            <ToggleButton value='yearly' className={alignment.includes('yearly') ? style.actives : style.inactives}>YEARLY</ToggleButton>
            <ToggleButton value='lifetime' className={alignment.includes('lifetime') ? style.actives : style.inactives}>LIFE TIME</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        {
          alignment.includes('monthly') && <BillCard />
        }
      </Container>
    </Box>
  );
};

export default Bill;