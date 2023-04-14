import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
   root:{
    textAlign: 'center',
    fontSize:    '3rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    color:' #100547',
    textShadow:' 1px 1px 1px rgba(0, 0, 0, 0.2)',
    fontFamily:"Montserrat",
    '& span':{
    color: '#f4ff00',
    background: '#052591',
    }
   }
})