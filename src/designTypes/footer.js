import { makeStyles } from "@mui/styles";

export const footerStyle = makeStyles({
    root:{
        background:"rgb(7 31 139 / 97%)",
      
        '& img':{
           marginBottom:"17px"
        },
        '& p':{
            margin:"17px 0px",
            color:'#ffffff',
            fontWeight: '400',
            fontSize:'17px',
            lineHeight: '1.6'
         },
         '& h3':{
            padding:'18px',
            color:'#ffffff',
            margin:'20px 0px 10px 0px',
            fontSize: '20px',
            lineHeight: '1.5',
            marginBottom: '0.5em',
            textTransform: 'uppercase',
         },
         '& span':{
           color:'#ffffff',
           fontWeight: '400',
           fontSize: '17px'
         }
    }
})