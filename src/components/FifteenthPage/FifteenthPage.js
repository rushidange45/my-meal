import { Box, Button, Typography,Paper } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import FifteenthPageSelectMeal from './FifteenthPageSelectMeal';
import FifteenthPageSelectDays from './FifteenthPageSelectDays';
import FifteenthPageCalender from './FifteenthPageCalender';
 const useStyles= makeStyles(({
  FifteenthPageBox:{
    textAlign:"justify"
  },
  heading:{
   fontWeight:"bold",
   textAlign:"justify",
   margin:"10px"
  },
 menuButton:{
    float:"right",
    borderRadius:"20px",
    fontSize:"10px",
    width:"fitContent",
    height:"30px",
    fontWeight:"bolder",
    // marginTop:"8px"
 },
 menuIcon:{
   marginLeft:"2px",
},
buttonsToChooseMealTime:{
    display:"flex",
    justifyContent:"space-evenly",
    margin:"5px",
    padding:"2px",     
},
 PaperFromFifteenthPage:{
        padding:"8px",
        width:"90%",
        height:"auto",
        fontWeight:"bold",
        borderRadius:"15px",
        margin:"5% auto",
        paddingBottom:"10px",
        boxShadow:"0px 0px 5px 0px"
        
 },
 mealTimeButtons:{
     width:"130px",
     height:"30px",
     borderRadius:"20px",
     textAlign:"justify",
    //  padding:"2px"
    textTransform:"capitalize"
 },
 nextButton:{
  width:"90%",
  height:"fitContent",
  borderRadius:"20px",
  
 }
 }))
function FifteenthPage() {

    const classes = useStyles();
    return (
        <div>
           <FifteenthPageSelectMeal useStyles={useStyles} />
            <FifteenthPageSelectDays useStyles={useStyles} />
            <FifteenthPageCalender />
            <Button className={classes.nextButton} variant='contained' color="primary">Next</Button>
        </div>
    )
}

export default FifteenthPage
