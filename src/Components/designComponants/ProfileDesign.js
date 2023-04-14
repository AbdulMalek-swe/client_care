import { makeStyles } from "@mui/styles";

export const profileStyle = makeStyles({
    root:{
        '& .cardStyle':{
            maxWidth: 345,
            margin:"0 auto"  
        },
        '& .avatar':{
            width: 116,
             height: 116,
             margin:"0 auto"
        },
        '& .btn':{
            width:"100%",
            display: 'flex', 
             justifyContent: 'space-between',
             color:"black" ,
             textTransform: 'none',
             '& .Box':{
                 display: 'flex', 
                 alignItems: 'center', 
                 justifyContent: 'space-between', 
                 '& .firstTypo':{paddingTop:"5px"},
                 '& .secondTypo':{paddingLeft:"30px"}
             }
        },
    }
})