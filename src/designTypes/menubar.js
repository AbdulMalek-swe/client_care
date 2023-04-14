import { makeStyles } from "@mui/styles";

export const menuStyle = makeStyles((theme) => ({
    root: {
        position: 'relative',
        color: '#15076c',
        fontWeight: '700',
        textDecoration: 'none',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            height: '2px',
            backgroundColor: 'green',
            transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
            width: 0,
        },
        '&:hover::after': {
            left: 0,
            width: '100%',
        },
    },
    menuBtn: {
        width: '122px',
        height: '53px',
        paddingX: '23px',
        background: '#151070 !important',
        color: '#ffffff ',
        fontWeight: '600',
        borderRadius: '26px 26px 26px 26px !important',
        '&:hover': {
            color: '#2b6cb0 !important',
            boxShadow: '1px 4px 17px 0px rgba(240,240,240,0.7) !important',
             background: '#151070  '
        },
        marginLeft: "auto !important",
        marginRight: '5px !important'
    },
    subroot: {
        extend: 'root',
        height: '70px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",   
    },
 

    btns: {
        width: '122px !important',
        height: '53px !important',
        paddingX: '23px !important',
        background: '#151070 !important',
        color: '#ffffff !important',
        fontWeight: '600 !important',
        borderRadius: '26px 26px 26px 26px !important',
        '&:hover': {
            color: '#2b6cb0 !important',
            boxShadow: '1px 4px 17px 0px rgba(240,240,240,0.7) !important', background: '#151070 !important'
        },
        marginLeft: "auto !important"
    },
    submenu: {
        padding: '0px',
        '& .listIcon': {
            width: "168px",
            color: "#F7FAFC",
            fontWeight: "bold",
            borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '4px 12px'
        }
    }
}))

