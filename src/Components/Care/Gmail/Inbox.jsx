import * as React from 'react';
 
import Box from '@mui/material/Box';
 
import InboxLeft from './InboxLeft';
import InboxRight from './InboxRight';
import { Grid } from '@mui/material';
import { gmailStyle } from 'Components/designComponants/gmailCare';

export default function Inbox() {

const style = gmailStyle()
  return (
    <Box
    className={style.inboxRoot}
 
    >
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={7} md={8} >
            <InboxLeft />
          </Grid>
          <Grid item xs={12} sm={5} md={4}>
            <InboxRight/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}