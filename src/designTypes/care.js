import { makeStyles } from "@mui/styles";
export const careStyle = makeStyles({
    root:{
          display:'flex',
          justifyContent:'center',
         '& Button':{
                fontSize: '18px',
                lineHeight:'1.3em',
                fontWeight: '500',
                textTransform: 'uppercase',
                padding:'14px 3px',
                borderColor: '#052591',
                color: '#ffffff',
                background: '#052591',
                marginRight:'5px',
                marginLeft:'12px',
                '&:hover':{
                    background: '#052591',
                    color: '#f4ff00',
                }
         }
    },
    border:{
        height: '2px', background: '#052591' 
    },
    careHeading:{
      '& h2':{
         marginTop:'0px',
         marginBottom:'9.8px',
         fontWeight:'600',
         fontSize:'22px',
         color:'#052591',
         lineHeight:'1.5'
      },
      '& span':{
        fontWeight:'bold',
        color:'#052591',
        fontSize:'20px',
        lineHeight:'1.6'
      }
    },
    text:{
        color:'#052591',
        fontSize:'18px',
       padding:"24px"
    },
    background:{
        background:"#052591"
    }
})