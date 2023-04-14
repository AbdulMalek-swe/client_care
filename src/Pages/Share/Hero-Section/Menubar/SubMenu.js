import { Box, Button, List, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material';
import { menuStyle } from 'designTypes/menubar';
import React from 'react';
import { Link } from 'react-router-dom';
import './Menubar.css'
const SubMenu = () => {
  const style = menuStyle();
  return (
    <Box className='submenu'>
      <List className={style.submenu}>
        <Link to="/dashboard/gmailcare" >
          <ListItemButton sx={{ padding: '0px' }}>
            <ListItemIcon className='listIcon'>
              <ListItemText >
                <Button>Gmail Care AI</Button>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </Link>
        <Link to="/dashboard/gmbcare" >
          <ListItemButton sx={{ padding: '0px' }}>
            <ListItemIcon className="listIcon">
              <ListItemText >
                <Button>GMB Care AI </Button>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </Link>
        <Link to="/dashboard/gmbcare">
          <ListItemButton sx={{ padding: '0px' }}>
            <ListItemIcon className="listIcon">
              <ListItemText >
                <Button>YouTube Care AI</Button>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </Link>
        <Link to="/dashboard/gmailcare" >
          <ListItemButton sx={{ padding: '0px' }}>
            <ListItemIcon className="listIcon">
              <ListItemText >
                <Button>Wordpress Care AI</Button>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </Link>
        <Link to="/dashboard/gmailcare" >
          <ListItemButton sx={{ padding: '0px' }}>
            <ListItemIcon className="listIcon">
              <ListItemText >
                <Button>WhatsApp Care AI</Button>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </Link>
        <Link to="/dashboard/gmailcare" >
          <ListItemButton sx={{ padding: '0px' }}>
            <ListItemIcon className="listIcon">
              <ListItemText >
                <Button>Facebook Care AI</Button>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </Link>
        <Link to="/dashboard/gmailcare" >
          <ListItemButton sx={{ padding: '0px' }}>
            <ListItemIcon className="listIcon">
              <ListItemText >
                <Button>Instagram Care AI</Button>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </Link>
      </List>

    </Box>
  );
};

export default SubMenu;