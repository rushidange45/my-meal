import React from 'react'
import { Box, Button, Typography,Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(({
    heading:{
        fontWeight:"bold",
        textAlign:"justify",
        margin:"10px"
    },
    buttonsToChooseMealTime:{
        // display:"flex",
    },
    PaperFromFifteenthPage:{
        padding:"8px",
        width:"90%",
        height:"fitContent",
        fontWeight:"bold",
        borderRadius:"15px",
        margin:"5% auto",
        paddingBottom:"10px"
    
    },
    buttonsToChooseMealTime:{
      display:"flex" ,
      justifyContent:"space-evenly"
    },
    daysButton:{
        width:"fitContent",
        border:"1px solid gray",
        borderRadius:"5px",
        padding:"2px",
        margin:"3px",
        
    },
    span:{
        color:"green",
        fontSize:"13px", 
        fontWeight:"bold",
        textTransform:"capitalize"
    },
    typo:{
        fontWeight:"bold",
        fontSize:"15px",
        textTransform:"capitalize",
    },
    WeekendDaysButton:{
        display:"flex",
        borderRadius:"20px",
        margin:"2px",
        textTransform:"capitalize",
        border:"1px solid gray"
    }
}))
function FifteenthPageSelectDays() {
    const classes = useStyles();
    return (
        <div>
            <Box>
                <Paper className={classes.PaperFromFifteenthPage}>
                    <Typography className={classes.heading}>Select Days</Typography>
                   <Box className={classes.buttonsToChooseMealTime}>
                   <Button className={classes.daysButton} variant='contained' color="primary" component={Button}><Typography className={classes.typo} selected>3 Days <br/><span className={classes.span} style={{color:"black"}}>Trial</span> </Typography></Button>
                   <Button className={classes.daysButton} component={Button}> <Typography className={classes.typo}>7 Days <br/><span className={classes.span}>5% Off</span></Typography></Button>
                   <Button className={classes.daysButton} component={Button}><Typography className={classes.typo}>12 Days <br/><span className={classes.span}>7% Off</span></Typography></Button>
                   <Button className={classes.daysButton} component={Button}><Typography className={classes.typo}>1 Month <br/><span className={classes.span}>12% Off</span></Typography></Button>
                    </Box>   
                    <Typography className={classes.heading}>Weekend included? </Typography>
                   <Box className={classes.buttonsToChooseMealTime}>
                   <Button className={classes.WeekendDaysButton} variant='contained' color="primary" >No</Button>
                   <Button className={classes.WeekendDaysButton} >Yes </Button>
                   <Button className={classes.WeekendDaysButton} >Only Sat </Button>
                   <Button className={classes.WeekendDaysButton} >Only Sun</Button>
                    </Box>                 
                </Paper>
            </Box>
        </div>
    )
}

export default FifteenthPageSelectDays
