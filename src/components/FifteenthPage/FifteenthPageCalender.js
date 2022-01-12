import React, { useState } from 'react'
import 'react-daypicker/lib/DayPicker.css';
import { Box,Typography,Paper } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './FifteenthPageCalender.css'
const  useStyles = makeStyles(({
    PaperFromFifteenthPage:{
        padding:"8px",
        width:"90%",
        height:"fitContent",
        fontWeight:"bold",
        borderRadius:"15px",
        margin:"5% auto",
        paddingBottom:"10px"
    },
    heading:{
        fontWeight:"bold",
        textAlign:"justify",
        margin:"10px"
    }
}))
function FifteenthPageCalender() {
    const [value, setValue] = useState(new Date());
    // const onChange = () => {
    //     setValue(day)
    // }
    const classes = useStyles()
    return (
        <div>
             <Box>
                <Paper className={classes.PaperFromFifteenthPage}>
                    <Typography className={classes.heading}>Start Date</Typography>  
                    <Box>
                    <Calendar onChange={setValue} value={value} selectRange={true}/>
                    {/* <DayPicker onDayClick={(e) => setValue()} active={value} selectRange={true} /> */}
                    </Box>            
                </Paper>
            </Box>
        </div>
    )
}

export default FifteenthPageCalender
