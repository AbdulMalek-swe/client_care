import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Drawer from '@mui/material/Drawer';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GmailDrawer from './DrawerGmail';
import img from '../../../assets/logo_gmail_lockup_default_1x_r5.png'
import Gmailbar from './AppbarGmail';
import Inbox from './Inbox';
 
import GmailMessage from './MessageGmail';
import { gmailStyle } from 'Components/designComponants/gmailCare';
 
const drawerWidth = 240;
 
function GmailCare(props) {
   
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const container = window !== undefined ? () => window().document.body : undefined;
const style = gmailStyle();
  let [message,setMessage] = React.useState(false);
  
  return (
    <Box>   
    <h1>Streamline and Automate Your Email Customer Service</h1>
    <Box sx={{ display: 'flex' }} className={style.root} >
      
      <CssBaseline />
     
      {/* here gmail header code  */}
      <Gmailbar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ marginTop: '123px', width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            marginTop: '123px',borderRight:"none",
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
 {/* gmail side bar code in gmaildrawer file  */}
          <GmailDrawer setMessage={setMessage} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            marginTop: '123px',
            borderRight:"none",
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box', width: drawerWidth
            }
          }}
          open
        >
          {/* gmail side bar code in gmaildrawer file  */}
          <GmailDrawer setMessage={setMessage}  />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
          
         {/* gmail inbox code in inbox file here  */}
           
          <Inbox />
         
        </Typography>
        {
          message &&
        <GmailMessage/>
        }
      </Box>
    </Box>
    </Box>
  );
}

GmailCare.propTypes = {
  window: PropTypes.func,
};

export default GmailCare;