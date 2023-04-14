import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { Avatar, Badge, Button, Card,  Modal,   Typography } from '@mui/material';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { BootstrapInput, modals, updateStyle } from 'Components/designComponants/updateProfile';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  '& .modalBtn':{
    background:'red'
  }
};


const UpdateProfile = () => {
  const style = updateStyle()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = async () => {
    await toast.success("wow you can did it")
    await handleClose()
  }
  const SmallAvatar = styled(DownloadForOfflineIcon)(({ theme }) => ({
    cursor: 'pointer',
    width: 42,
    height: 42,
    border: `0px solid ${theme.palette.background.paper}`,
  }));

  return (
    <Box className={style.root}>
      <Link className='back-btn' to="/account">
          <Button> <ArrowBackIcon />Back</Button>
      </Link>
      <Typography variant="h2" component="h2">
        Update profile
      </Typography>
      <Card className='cardStyle'>
        <Box
          component="form"
          noValidate
          align="center"
        >
          <Box   >
            <label htmlFor="image-upload" >

              <Badge
                align="center"
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  <SmallAvatar  > </SmallAvatar>
                }
              >

                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className='avatar1' />
              </Badge>
            </label>
            <input id="image-upload" type="file" className='hiddenInput' />

          </Box>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">
              UserName
            </InputLabel>
            <BootstrapInput defaultValue="noman brother" id="bootstrap-input" />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">
              Email
            </InputLabel>
            <BootstrapInput defaultValue="ab@gmail.com" id="bootstrap-input" />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">
              New Password
            </InputLabel>
            <BootstrapInput id="bootstrap-input" type='password' />

          </FormControl>
        </Box>

        <Button onClick={handleOpen} sx={{marginTop:"22px"}}>Submit</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          align="center"
        >
          <Box  sx={ styles} >

            <FormControl variant="standard">
              <InputLabel shrink htmlFor="bootstrap-input">
                Password
              </InputLabel>
              <BootstrapInput id="bootstrap-input" type='password' />

            </FormControl>
            <Button onClick={handleSubmit} sx={{background:" ",display:"block"}}>Confirm</Button>
          </Box>
        </Modal>

      </Card>

    </Box>
  );
};

export default UpdateProfile;