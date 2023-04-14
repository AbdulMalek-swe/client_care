import { makeStyles } from "@mui/styles";


export const billStyle = makeStyles({
    root: {
        textAlign: 'center',
        '& .textHeader': {
            color: ' #080d63',
            fontWeight: '700',
            fontSize: '28px',
            lineHeight: '1.5',
            margin: '42px 0px 14px'
        },
        '& Button': {
            fontSize: '18px',
            lineHeight: '1.3em',
            fontWeight: '600',
            textTransform: 'uppercase',
            padding: '8px 20px',
            marginRight: '5px',
            marginLeft: '12px',
            borderRadius: "0px"
        }
    },
    actives: {
        background: '#ffffff !important',
        border: 'none !important',
        borderBottom: "4px #0a6689 solid !important",
        color: '#0a6689 !important'
    },
    inactives: {
        background: '#052591 !important',
        border: 'none !important',
        borderBottom: "4px #0fe6f2 solid !important",
        color: '#ffffff !important',
        '&:hover': {
            color: '#052591 !important',
            background: '#ffffff !important',
        }
    },
    card: {
        padding: '20px',
        borderTop: '1px solid #edf2f7',
       
        '& .headerText': {
            paddingTop: '48px',
            textAlign: 'center',
            marginBottom:'72px',
            '& h2': {
                fontSize: '3rem',
                color: '#1A202C',
                fontWeight: "700",
                marginBottom: '22.48px',
                '& span': {
                    color: '#1b53c4'
                }
            }
        },
        '& p': {
            marginBottom: '32px',
            fontSize: '18px',
            '& a': {
                textDecoration: "underline !important"
            }
        },
        '& .cardHeader': {
            '& h2': {
                fontSize: '22px',
                fontWeight: 'bold',
                marginBottom: '31px',
                lineHeight: '22px',
                color: '#2D3748'
            },
            '& h5': {
                fontSize: '55px',
                fontWeight: '700',
                marginBottom: '31px',
                lineHeight: '55px',
                color: '#2D3748',
                '& span': {
                    color: '#718096',
                    fontSize: '20px'
                }
            },
            '& h4':{
                color:'#2d3748e0',
                fontSize:'16px',
                marginBottom: '16px',
                lineHeight:'1.8em'
            },
            '& div':{
               paddingTop:'20px',
               '& p':{
                display:'flex',
                alignItems:'center',
                marginBottom:'20px',
                fontSize:'16px',
                lineHeight:'30px',
                color:'#2d3748e0',
                '& span':{
                  
                }
               }
            },
            '& Button':{
               textAlign:'center' ,
               background:'#2b6cb0',
               width:'100%',
               height:'80px',
               color:'#ffffff'
            }

        }
    }
})