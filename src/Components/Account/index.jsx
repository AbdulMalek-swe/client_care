import { Avatar, Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import PowerInputTwoToneIcon from '@mui/icons-material/PowerInputTwoTone';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import { profileStyle } from "Components/designComponants/ProfileDesign";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LogoutIcon from '@mui/icons-material/Logout';
import Connect from "./Connect/Connect";
import React from "react";
const Account = (props) => {
    const style = profileStyle()
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    console.log(open);
     return(
      <Box  className={style.root}>
        <Link className='back-btn' to="/">
          <Button> <ArrowBackIcon />Back</Button>
      </Link>
          <Card className="cardStyle">
      <CardActionArea >
      <Avatar
         alt="Remy Sharp"
         src="/static/images/avatar/1.jpg"
         className="avatar"
      />
        <CardContent>
          <Typography align="center" gutterBottom variant="h5" component="div">
            Abdul Malek
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Link style={{width:"100%"}} to="/update/profile">
          <Button   className="btn">
          <Box className="Box" >
           <Typography  className="firstTypo"> <BorderColorTwoToneIcon/></Typography>
             <Typography  className="secondTypo" >Update Profile</Typography>
          </Box>
           <KeyboardArrowRightTwoToneIcon/>
        </Button>
       </Link>
       
      </CardActions>
      <CardActions>
       <Link style={{width:"100%"}} to="/billing/info">
          <Button   className="btn" >
          <Box className="Box" >
           <Typography  className="firstTypo"> <PowerInputTwoToneIcon/></Typography>
             <Typography  className="secondTypo" >Billing Details</Typography>
          </Box>
           <KeyboardArrowRightTwoToneIcon/>
        </Button>
       </Link>
       
      </CardActions>
      <CardActions>
       <Link style={{width:"100%"}}  >
          <Button   className="btn" onClick={handleClickOpen} >
          <Box className="Box" >
           <Typography  className="firstTypo"> <LogoutIcon/></Typography>
             <Typography  className="secondTypo" >
              Connect
              
             </Typography>
          </Box>
           <KeyboardArrowRightTwoToneIcon/>
        </Button>
       </Link>
       {
        open&&<Connect setOpen={setOpen} open={open}/>
       }
      </CardActions>
      <CardActions>
       <Link style={{width:"100%"}} to="/">
          <Button   className="btn" >
          <Box className="Box" >
           <Typography  className="firstTypo"> <LogoutIcon/></Typography>
             <Typography  className="secondTypo" >Logout</Typography>
          </Box>
           <KeyboardArrowRightTwoToneIcon/>
        </Button>
       </Link>
       
      </CardActions>
    </Card>

      </Box>
    );
};

export default Account;