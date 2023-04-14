import React, { useState } from 'react';
import {
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
   
  } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from 'styled-components';
  const pages = ["Products", "Services", "ABoutUs", "ContactUs"];
const Drawerbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
     console.log(openDrawer);
    return (
        <>
       
        <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      
      >
        <List   sx={{width:"400px"}}>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
       
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
        
      </IconButton>
        </>
    );
};

export default Drawerbar;