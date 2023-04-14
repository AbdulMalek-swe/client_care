const { makeStyles } = require("@mui/styles");

export const userFormStyle = makeStyles({
    root: {
        boxShadow: "0px 0px 22px -6px #00000069",
        margin: "0 10%",
        padding: "40px 40px",
        '& .headertext': {
            marginBottom: '60px',
            textAlign: "center !important",
        },
        '& .userForm':{
              marginTop:'12px'
        },
        '& h4': {
            fontSize: '16px'
        },
        '& Button': {
            width: '100%',
            borderRadius: "10px",
            padding: "10px 0px",
            margin: "10px 0px",
            
        },
        '& .btn1':{
            color:'white',
           background:'rgb(10 87 195 / 88%)',
           '&:hover':{
            background:'rgb(10 87 195 / 88%)'
        }
        },
        '& .btn2':{
            color:'white',
            background:'rgb(10 127 195 / 85%)',
            '&:hover':{
                background:'rgb(10 87 195 / 88%)'
            }
         },
         '& .btn3':{
            color:'white',
            background:'rgb(10 190 195 / 85%)',
            '&:hover':{
                background:'rgb(10 87 195 / 88%)'
            }
         },
        '& .inputField':{
            width:'100%',
            marginBottom:'12px'
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(12 96 232 / 92%)",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(12 164 232 / 92%)" ,
            boxShadow:"0px 0px 0px 0px #00000069" 
          },
          "& .MuiInputLabel-outlined.Mui-focused": {
            color: "rgb(12 164 232 / 92%)"  
          }
    },
    header: {

    }
})