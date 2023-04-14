import { makeStyles } from "@mui/styles";

export const cardStyle = makeStyles({
    root: {
      backgroundColor: '#fff',
      border: '5px #0fe6f2 solid',
      borderRadius:'20px',
      position: 'relative',
      textAlign:'center',
      width:'100%',
      '& img': {
        border: '5px #0fe6f2 solid',
        width: '107px',
        height: '107px',
        position: 'absolute',
        display: 'block',
        top: '-22%',
        left:'38%',
        borderRadius:'50%',
        backgroundColor:'#fff'
      },
     '& h5':{
           marginTop:"49px",
           color:'#052591',
           fontSize:'24px',
           lineHeight:'1.5',
           fontWeight:'700'
      },
      '& p':{
        color:'#000000',
        fontSize:'1.25rem'
      },
      '& .btn':{
        display:'flex',
        justifyContent:'center',
        paddingBottom:"20px"
      },
      '& Button':{
        backgroundColor:'#052591' ,
        color:'#ffffff',
        borderRadius:'23px',
        border:'8px solid #052591',
        padding:"8px 12px",
        '&:hover':{
          backgroundColor:'#052591' ,
        }
      }
    },
  });
  