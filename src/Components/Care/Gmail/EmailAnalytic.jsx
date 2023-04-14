import { Avatar, Box, Grid, Typography } from '@mui/material';
import { CircularProgressbar } from 'react-circular-progressbar';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AnalyticsIcon from '@mui/icons-material/Analytics';
export default function EmailAnalytic() {
    //   const [progress, setProgress] = React.useState(80);
    const percentage = 66;
    return <>
        <Box>
            <Typography component="h4" sx={{ display: "flex", fontSize: '22px', fontWeight: "700", alignItems: "center", justifyContent: "center", mb: 3 }}> <AnalyticsIcon /> <span>Email Analytics</span></Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", m: 1 }}>
            <Avatar sx={{ width: 142, height: 142 }}>M</Avatar>
            <Box sx={{ mx: 1 }}>
                <Typography>name : Abdul Malek</Typography>
                <Typography>Age : 33</Typography>
                <Typography>Country : USA</Typography>
            </Box>
        </Box>
        <Box sx={{ my: 3, fontSize: "16px", fontWeight: "400" }}>
            <Typography component="h5" sx={{ fontSize: "14px", fontWeight: "700" }}>Questions:</Typography>
            {[1, 2, 3, 4].map(item => <Typography component="p" sx={{ fontSize: "14px", fontWeight: "400" }}>Question {item}</Typography>)}
            <Typography component="h5" sx={{ fontSize: "14px", fontWeight: "700" }}>Interests:</Typography>
            {[1, 2, 3, 4].map(item => <Typography component="p" sx={{ fontSize: "14px", fontWeight: "400" }}>Interes {item}</Typography>)}
            <Typography component="h5" sx={{ fontSize: "14px", fontWeight: "700" }}>Concerns:</Typography>
            {[1, 2, 3, 4].map(item => <Typography component="p" sx={{ fontSize: "14px", fontWeight: "400" }}>Concern {item}</Typography>)}

            <Box sx={{ display: "flex", my: 2 ,alignItems:"center"}}>
                <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>Email tone: Professional</Typography>
                <Box sx={{ paddingTop: "0px", display: 'flex', flexDirection: "column", alignItems: "center" }}>
                    <Box sx={
                        { paddingTop: "0px", }
                    }>
                        <Typography sx={{ display: "flex", paddingTop: "0px", }}><span>FCR </span> <ErrorOutlineIcon /></Typography>
                    </Box>
                   <div style={{width:"50%"}}>
                   <CircularProgressbar
                        value={percentage}
                        text="60%"
                        styles={{
                            strokeLinecap: 'butt',
                            pathTransitionDuration: 0.5,
                            path: {
                                stroke: 'rgb(248 163 59 / 93%)',
                            },
                            text: {
                                fill: 'black',
                                fontSize: '18px',
                                fontWeight: "700",
                            },
                            trail: {
                                stroke: "rgb(216 212 204)"
                            }
                        }}
                    />
                   </div>
                </Box>
            </Box>

        </Box>

    </>;
}