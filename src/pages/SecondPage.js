import React from 'react'
import FirstPageLogo from './FirstPageLogo'
import myMealLogo from '../assets/myMeal Logo.svg';
import splashBG from'../assets/splashBG.svg';
import { Box, Container, Input, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(({
    paper:{
       width:"80%"
    }
}))
function SecondPage() {
    const classes = useStyles();
    return (
        <div>
            <FirstPageLogo flagToSetLogoAtTop = {true} />
            <Box>
                <Typography variant='h4'>
                        Hey There!
                </Typography>
                <Typography variant='subtitle'>
                     Thanks for Choosing Us
                </Typography>
            </Box>
             <Container>
                 <Paper className={classes.paper}>
                     <Typography>
                         Enter your details to proceed
                     </Typography>

                     <Input className={classes.nameInput}  placeholder='Name' disableUnderline/>
                 </Paper>
             </Container>
        </div>
    )
}

export default SecondPage
