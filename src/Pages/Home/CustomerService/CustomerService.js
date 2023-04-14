import { Grid, List, ListItem, ListItemText, ListSubheader, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
 
import clientCare from '../../../assets/2.png'
import { style } from 'designTypes/customerDesign';
const CustomerService = () => {
    const styleClass = style();
    return (
        <Box sx={{ paddingY: "104px" }}>
            <Container>
                <Grid container direction="row"
                    justifyContent="center"
                      spacing={4}>
                    <Grid item xs={12} sm={7} md={8}  >
                        <Typography component='h2' className={styleClass.headers}> Why Choose Client Care?</Typography>
                        <Typography className={styleClass.root}>
                         <TaskAltIcon /> <strong> Automate your customer service:</strong> Our AI-powered platform uses natural language processing and machine learning to understand and respond to customer queries accurately and efficiently.
                        </Typography>
                        <Typography className={styleClass.root}>
                         <TaskAltIcon /> <strong>  Personalized Responses: </strong>Our platform provides personalized responses and recommendations to each individual customer, ensuring an exceptional customer experience.
                        </Typography>
                        <Typography className={styleClass.root}>
                         <TaskAltIcon /> <strong>   Integration with Existing Systems: </strong> Our platform integrates seamlessly with your existing systems and workflows, requiring no significant changes to your current processes.
                        </Typography>
                        <Typography className={styleClass.root}>
                         <TaskAltIcon   /> <strong> Secure Handling of Customer Data:  </strong> Our platform ensures the security and protection of your customer data.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5} md={4} >
                        <img alt="Loading..." src={clientCare} width="100%" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CustomerService;