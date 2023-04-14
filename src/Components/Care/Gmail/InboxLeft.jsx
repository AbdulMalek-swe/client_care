import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Input, Typography } from '@mui/material';
import { gmailStyle } from 'Components/designComponants/gmailCare';
import MessageGmail from './MessageGmail';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box  >{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
const InboxLeft = () => {
    const style = gmailStyle()
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChangeIndex = (index) => {
        setValue(index);

    };
  
    const [data,setData] = useState('');
    const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handlePopup = async e =>{
      await setData(e)
      await setOpen(true)
     
    }
   
    return (
        <>
            {['Sunt laudantium it  this is explain for it so never mind it easy 1','Sunt laudantium it  this is explain for it so never mind it easy 2','Sunt laudantium it  this is explain for it so never mind it easy  3','Sunt laudantium it  this is explain for it so never mind it easy 4'].map(item => <Box
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}  
                className={style.inboxLeft}
            >
                <TabPanel value={value} index={0} className="message" onClick={()=>handlePopup(item)} >
                    <input
                        type='checkbox'  
                    /> <Typography component="span" >
                         {item}
                    </Typography>
                </TabPanel>
            </Box>)}
       
                 <MessageGmail  open={open} handleClose={handleClose} data={data} />
          
        </ >
    );
};

export default InboxLeft;