import React from 'react';
import { Box, Button, Typography,Paper } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'


function FifteenthPageSelectMeal({useStyles}) {
    const classes = useStyles();
    return (
        <div>
             <Box m={1} className={classes.FifteenthPageBox}>
                <Typography className={classes.heading}>My Meal Plan
                 <Button startIcon = {<MenuIcon className={classes.menuIcon} />} className={classes.menuButton} variant='contained' color="primary">Menu</Button>
                 </Typography>
            </Box>
            <Box>
                <Paper className={classes.PaperFromFifteenthPage}>
                    <Typography className={classes.heading}>Select Meal Plan</Typography>
                   <Box className={classes.buttonsToChooseMealTime}>
                        <Button variant='contained' color="primary"  className={classes.mealTimeButtons} > Breakfast </Button>
                        <Button variant='outlined'  className={classes.mealTimeButtons} > Lunch </Button>
                    </Box>
                    <Box className={classes.buttonsToChooseMealTime}>   
                        <Button variant='outlined'  className={classes.mealTimeButtons} > Dinner </Button>
                        <Button variant='outlined'  className={classes.mealTimeButtons} > All </Button>
                    </Box>                 
                </Paper>
            </Box>
            
        </div>
    )
}

export default FifteenthPageSelectMeal
