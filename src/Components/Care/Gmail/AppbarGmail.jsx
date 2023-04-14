import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import img from '../../../assets/logo_gmail_lockup_default_1x_r5.png'
import { Avatar, Badge, IconButton, InputBase, Paper, Switch, Typography } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import AppsIcon from '@mui/icons-material/Apps';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Gmailbar = (props) => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <>
  
      <AppBar sx={{ zIndex: '1000000', padding: '6px', background: "white", boxShadow: '0px 0px 0px 0px white' }}>
     <Typography component="h2" sx={{color:"rgb(9 21 75 / 98%)",fontWeight:"700",fontSize:"20px",textAlign:"center",my:2}}>Streamline and Automate Your Email Customer Service</Typography>
        <Toolbar sx={{ marginLeft: '10px', }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ color: 'green' }} />
          </IconButton>
          <img alt='loading...' src={img} width="80px" height="22px" />
          <>
            <Box marginLeft='auto'>
            <Box sx={{display:"flex"}}>
            <Paper
                component="form"
                sx={{
                  p: '2px 4px', display: 'flex', alignItems: 'center' ,  background: '#e9e9e999', boxShadow: '0px 0px 0px 0px white', '&:hover': {
                    borderColor: 'blue',
                    boxShadow: '0px 0px 10px 0px rgb(0 0 0 / 33%)'
                  }
                }}
                tabIndex={0}
              >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Gmail"
                  inputProps={{ 'aria-label': 'search gmail' }}
                />

                <IconButton sx={{ p: '10px' }}  >
                  <ManageSearchIcon />
                </IconButton>
                
              </Paper>
              <Switch sx={{marginLeft:"24px",color:"black", }} {...label} defaultChecked />
            </Box>
             
            </Box>
            <Box marginLeft='auto' sx={{ display: "flex" }}>
            <YouTubeIcon sx={{ color: 'black', mx: 1 }}/>
              <YouTubeIcon sx={{ color: 'black', mx: 1 }}/>
              <Badge badgeContent={4} color="primary"   >
                <NotificationsSharpIcon color="action" />
              </Badge>
              <SettingsOutlinedIcon sx={{ color: 'black', mx: 1 }} />
              <HelpOutlineOutlinedIcon sx={{ color: 'black' }} />
              <AppsIcon sx={{ color: 'black', mx: 1 }} />
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 24, height: 24, mx: 1 }}
              />
            </Box>
          </>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Gmailbar;