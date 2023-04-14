import { Box, Grid, Typography } from '@mui/material';
import { CircularProgressbar } from 'react-circular-progressbar';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import EmailAnalytic from './EmailAnalytic';
export default function InboxRight() {
  //   const [progress, setProgress] = React.useState(80);
  const percentage = 66;
  return <>
    <Box>
      <Typography component="h4" sx={{ display: "flex",fontSize:'22px',fontWeight:"700",alignItems:"center" ,justifyContent:"center",mb:3 }}> <AnalyticsIcon/> <span>Overall Analytics</span></Typography>
    </Box>
  <Grid  container spacing={6} >
    {
      [1, 2, 3, 4].map(item =>
        <Grid item sx={{  paddingTop:"0px", display: 'flex', flexDirection: "row" }} xs={3} sm={6} md={6}>
          <Box sx={{ paddingTop:"0px",  display: 'flex', flexDirection: "column", alignItems: "center" }}>
            <Box sx={
      {paddingTop:"0px",}
            }>
              <Typography sx={{ display: "flex",paddingTop:"0px", }}><span>FCR </span> <ErrorOutlineIcon /></Typography>
            </Box>
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
          </Box>
        </Grid>)
    }
    </Grid>
    <Box sx={{my:3,fontSize:"16px",fontWeight:"400"}}>
      <Typography component="p">Average Response Time: ? Min</Typography>
      <Typography component="p">Overall Sentiment Analysis: Positive</Typography>
    </Box>
    <EmailAnalytic/>
  </>;
}