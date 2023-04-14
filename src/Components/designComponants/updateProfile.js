import { InputBase } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
const { makeStyles  } = require("@mui/styles");
 
export const updateStyle = makeStyles({
    root:{

        display: 'flex',
        flexDirection: 'column',
       justifyContent: 'center',
       alignItems:"center",
        '& .cardStyle':{
            maxWidth: 445,
            margin:"0 auto" ,
             display: 'flex',
             flexDirection: 'column',
            justifyContent: 'center',
            alignItems:"center",
            boxShadow:"0px 0px 0px 0px red"
        },
        '& .avatar1':{
            cursor:"pointer",
            width:140,height:140
        },
       '& .hiddenInput': {
            display: 'none',
          },
          '& .MuiFormControl-root':{
            marginTop:"20px",
            width:"100%"
          },
          '& .MuiInputBase-formControl':{
            width:"100%"
          },
        '& .back-btn':{
            position:'fixed',
            top:"0",
            left:'0'
        }
          
         
    },
    modalBtn:{
        background:"red"
    }
})

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
      width: '100%',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.0rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  export const modals =  {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

 