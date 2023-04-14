const { makeStyles } = require("@mui/styles");

export const gmailStyle = makeStyles({
  root: {
    '& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper': {
      borderRight: "none"
    },

  },
  // gmail drawer design start here 
  drawerRoot: {
    paddingTop: "102px",
    borderRight: 'none',
    '& .compase': {
      background: "rgb(164 231 255 / 86%)",
      width: "70%",
      padding: "6px",
      marginLeft: '12px',
      borderRadius: '20px',
      '& button':{
        color: "black"
      }
    },
    '& .labelBtn':{
      margin:'44px 12px',
      width:"70%",
      color:"black",
      background:"rgb(179 237 251 / 37%)",
      textTransform:"none"
    }
  },

  // inbox design code start here 
  inboxRoot:{
      bgcolor: 'background.paper',
      width: '100%',
      position: 'relative',
      minHeight: 200,
  },
  // left site inbox Design 
  inboxLeft: {
    '& .message': {
      color: 'rgb(32,33,36)',
      fontSize: "14px",
      lineHeght: "20px",
      fontWeight: "400",
      margin: "1px",
      cursor: "pointer",
      borderBottom: ".5px solid rgb(32 33 36 / 9%)",
      padding: "4px",
    }
  },
  // right site inbox design 
  inboxRight:{
    position: 'relative', 
    display: 'inline-flex',
  },
  // message section were edit or send 
  messagePop: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    background: 'white',
    border: '0px solid #000',
    // borderColor: 'transparant',
    boxShadow: 24,
    padding: "24px",
    borderRadius: "12px",
    outline: "none",
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {

      border: '2px solid #877c01',
      borderRadius: "12px",

    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {

      borderColor: '#877c01',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {

      borderColor: '#877c01',
    },
    '& .btn1': {
      marginTop: "15px",
      background: 'rgb(251 193 77 / 86%)',
      fontSize: '0.7rem',
      color: "black",
      fontWeight: "700",
      borderRadius: "20px",
      padding: "15px 8px",
      margin: "0px 22px",
      textTransform: 'none',
    },
    '& .btn2': {
      marginTop: "15px",
      background: 'linear-gradient(45deg, rgb(20 172 88 / 88%) 30%, rgb(130 198 83 / 63%) 90%)',
      fontSize: '0.7rem',
      color: "white",
      fontWeight: "700",
      borderRadius: "20px",
      padding: "4px 15px",
      textTransform: 'none',
    }
  }
})