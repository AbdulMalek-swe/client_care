import { Scale } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
export const purchaseStyle = makeStyles({
    root: {
        // maxWidth: 1090,
        // width: '100%',
        // margin: '0 auto',
        // display: 'grid',
        // gridTemplateColumns:Repeat
        // flexWrap: 'wrap',
        // flexDirection:"row",
        // justifyContent: 'space-between',
        // padding:"3px 4px 37px",
        // alignItems:"center",
        // marginLeft:"123px",
        '& .table': {
            background: '#fff',
            width: ' ',
            padding: '30px 30px',
            margin:"33px 0px",
            position: 'relative',
            boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
            '& ::selection, & .priceArea, & .innerArea, & .btn button': {
                background: '#a26bfa',
            },
            '& .btn button:hover': {
                background: '#833af8',
            },
            '& .packageName , .anotherPackage': {
                background: '#d0b3ff',
                '&::before': {
                    content: '"Premium"',
                    fontSize: 24,
                },
            },
            '& .ribbon': {
                width: '150px',
                height: '150px',
                position: 'absolute',
                top: ' -10px',
                left: ' -10px',
                overflow: ' hidden',
                '&::before, &::after': {
                    position: 'absolute',
                    content: '""',
                    zIndex: -1,
                    display: 'block',
                    border: '7px solid #4606ac',
                    borderTopColor: 'transparent',
                    borderLeftColor: 'transparent',
                },
                '&::before': {
                    top: '0px',
                    right: '15px',
                },
                '&::after': {
                    bottom: '15px',
                    left: '0px',
                },
               '& .recText': {
                    position: 'absolute',
                    top: '30px',
                    right: '0',
                    transform: 'rotate(-45deg)',
                    width: '200px',
                    background: '#a26bfa',
                    padding: '10px 0',
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: '17px',
                    textTransform: 'uppercase',
                    boxShadow: '0 5px 10px rgba(0,0,0,0.12)',
                  },
            }
        },

        '& .priceSection': {
            display: 'flex',
            justifyContent: 'center',
        },
        '& .priceArea': {
            height: '120px',
            width: '120px',
            borderRadius: '50%',
            padding: "2px"
        },
        '& .innerArea': {
            height: '100%',
            width: '100%',
            borderRadius: '50%',
            border: '3px solid #fff',
            lineHeight: '117px',
            textAlign: 'center',
            color: '#fff',
            position: 'relative',
        },
        '& .text': {
            fontSize: '25px',
            fontWeight: 400,
            position: 'absolute',
            top: '36px',
            left: '15px',
        },
        '& .price': {
            fontSize: '45px',
            fontWeight: 500,
            marginLeft: '1px',
            marginTop:'20%'
        },
        '& .packageName , .anotherPackage': {
            width: '100%',
            height: '2px',
            margin: '35px 0',
            position: 'relative',
            '&::before': {
                position: 'absolute',
                top: '50%',
                left: '50%',
                fontSize: '25px',
                fontWeight: 500,
                background: 'white',
                padding: '0 15px',
                transform: 'translate(-50%, -50%)',
            },
        },
          '& .featuresList': {
            marginBottom: '15px',
            listStyle: 'none',
            display: 'flex',
            flexDirection:"column",
            justifyContent: 'space-between',
          },
        '& .featureItem': {
            display: 'flex',
            alignItems: 'center',
            justifyContent:"space-between",
            '&::selection': {
                background: '#ffd861',
            },
            '& .featureIcon': {
                fontSize: '15px',
                marginRight: '8px',
                color: '#2db94d',
            },
            '& .listName': {
                fontSize: '17px',
                fontWeight: 400,
            },
        },
        '& .btn': {
            width: '100%',
            display: 'flex',
            marginTop: '35px',
            justifyContent: 'center',
            '& button': {
                width: '80%',
                height: '50px',
                color: '#fff',
                fontSize: '20px',
                fontWeight: 500,
                border: 'none',
                outline: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                    borderRadius: '5px',
                },
            },
        },
        '&::selection, .price-area, .inner-area': {
            background: '#ffd861',
        },
    },
    planHeader:{
        marginBottom:"44px",
        '& .planBtn':{
            display:'flex',
            flexDirection:'column',
            margin:"12px 0",
            color:"black",
            background:"#dadaef91",
            fontWeight:"700",
            padding:"20px",
            '&:hover':{         
                boxShadow:"0px 0px 5px 0px black",
                
            }
        },
        '& .btnGroup':{
            display:"flex",
            justifyContent:"center"
        }
         
    }
})