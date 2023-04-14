import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { gmailStyle } from 'Components/designComponants/gmailCare';

import React from 'react';

const MessageGmail = (props) => {
   const style = gmailStyle()
   return (
      <>
   
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={style.messagePop}>
       
       <TextField
          id="outlined-multiline-static"
           fullWidth
          multiline
          rows={4}
          defaultValue={props.data}
          className='sendMessage'
        />
          <Box className="btnGroup" align="right">
            <Button className='btn1'   disableElevation>Re-generate Response</Button>
          <Button className='btn2' disableElevation>Send Response</Button>
          </Box>
     
        </Box>
      </Modal>
  
      </>
   );
};

export default MessageGmail;