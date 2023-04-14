import { makeStyles } from "@mui/styles";

export const supportStyle = makeStyles({
    root:{
       '& h2':{
        color:'#052591',
        marginBottom:'14px',
        fontSize:'23px',
        fontWeight:'700'
       },
       '& p':{
        fontSize:'1.25rem',
        color:'#0a0a79',
        lineHeight: '40px',
        marginLeft:'14px'
       },
       '& .supportBtn':{
         textAlign:'center'
       }
    },
    img:{
        marginTop:'110px'
    }
})