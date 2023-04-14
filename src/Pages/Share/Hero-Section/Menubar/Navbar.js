import React, { useEffect } from 'react';
import { useState } from "react";
import {
    AppBar,
    Avatar,
    Box,
    Button,
    IconButton,
    Tab,
    Tabs,
    Toolbar,
    Tooltip,
    useMediaQuery,
    useTheme,
} from "@mui/material";
 
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Drawerbar from './Drawerbar';
import './Menubar.css'
import SubMenu from './SubMenu';
import { Container } from '@mui/system';
import client_care from 'assets/client_care.png'
import { Link } from 'react-router-dom';
import { menuStyle} from 'designTypes/menubar'
import ProfileBar from '../ProfileBar';
function Navbar() {
    let style = menuStyle()
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const [menuColor, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    let tabcolor=!menuColor?'black':'#151070'
    return (
            <AppBar sx={{ background:  !menuColor?'transparent':'#EDF2F7',padding:"0px",boxShadow:!menuColor?'none':'' }}>
                <Container sx={{padding:"0px"}}>
                    <Toolbar >
                        <img alt='loading...' src={client_care} width="220px" height="62px"   />
                        {isMatch ? (
                            <>
                                <Drawerbar />
                            </>
                        ) : (
                            <>
                                <Tabs
                                    sx={{ marginLeft: "auto" }}
                                    indicatorColor="secondary"
                                    textColor="inherit"
                                    value={value}
                                    onChange={(e, value) => setValue(value)}
                                >
                              
                                   <Tab   component={Link}
                                     to="/dashboardhome" 
                                   label="dashboard" sx={{color:tabcolor}}   />
                                
                                    <Box className={`sub-menu-hover ${style.subroot}`}   >
                                        <Tab label="Products" sx={{paddingX:'0px',color:tabcolor}}/>
                                        <KeyboardArrowDownOutlinedIcon  sx={{color:tabcolor}} />
                                        <SubMenu />
                                    </Box>
                                   
                                    <Tab label="About Us"  sx={{color:tabcolor}}   />
                                    <Tab label="Contact"  sx={{color:tabcolor}}   />
                                </Tabs>
                                <Button className={style.menuBtn}  variant="contained">
                                    Pricing
                                </Button>
                                <Link to="/register">
                                <Button className={style.menuBtn}  variant="contained">
                                   Signup
                                </Button>
                                </Link>
                                 <ProfileBar/>
                            </>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

       
    );
}

export default Navbar;
