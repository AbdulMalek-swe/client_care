import { makeStyles } from "@mui/styles";

export const durationStyle = makeStyles({
   root:{
     textAlign:'center' ,
     '& span':{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        color:'rgb(60 240 249)'
     },
     '& div':{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
     },
     '& strong':{
        fontSize:'28px',
        color:'#052591',
        letterSpacing:'1px'
     }
   }
})