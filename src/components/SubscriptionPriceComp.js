import { Paper, Typography,Box } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
const useStyles = makeStyles(({
    SubscriptionPriceCompPaper:{
        width:"90%",
        height:"fitContent",
        fontWeight:"bold",
        borderRadius:"15px",
        margin:"5% auto",
        paddingBottom:"10px"
    },
    heading:{
        textAlign:"justify",
        fontWeight:"bold",
        padding:"5px"
    },
    oldOffer:{
        textAlign:"justify",
        padding:"3px",
        textDecoration:"line-through",
        textDecorationThickness:"3px",
        color:"red",
        fontWeight:"bold",
    },
     newOffer:{
        textAlign:"justify",
        padding:"3px",
        color:"green",
        marginBottom:"5px",
        fontWeight:"bold"

    },
    menuItems:{
       textAlign:"justify"
        
    },
    menuPrice:{
        float:'right'      
    },
    hr:{
        opcaity: "0.8",
        width: "95%",
        marginRight:"auto",
        marginLeft:"auto",       
    }
  
}))
function SubscriptionPriceComp() {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.SubscriptionPriceCompPaper}>
            <Box>
                    <Typography variant='h6' className={classes.heading}>Subscription Price</Typography>
                </Box>
                <Box>
                    <Typography className ={classes.oldOffer}>
                        Rs 4,200.00 for 7 days | Rs 150 per meal
                    </Typography>
                    <Typography className ={classes.newOffer}>
                        Rs 3,360.00 for 7 days | Rs 120 per meal
                    </Typography>
                </Box>
                <Box m={1} className={classes.menuItems}>
                    <Typography>
                        Homestyle Thali Non Veg Lunch  <span className={classes.menuPrice}> ₹ 50</span>
                    </Typography>
                    <Typography>
                        Wholesome bowl Non Veg Lunch <span className={classes.menuPrice}>₹ 40</span>
                    </Typography>
                </Box>
                <Box m={1} className={classes.menuItems}>
                    <Typography style={{color:"grayText"}}>
                       Additional Items
                    </Typography>
                    <Typography>
                        HomeStyle Thali Veg Lunch <span className={classes.menuPrice}>₹ 120</span>
                    </Typography>
                </Box>
                <hr className={classes.hr}/>
                <Box m={1} className={classes.menuItems}>
                    <Typography>
                        Sub Total <span className={classes.menuPrice}>₹ 210</span>
                    </Typography>
                    <Typography>
                        Subscription Total <span className={classes.menuPrice}>₹ 3360</span>
                    </Typography>
                </Box><hr className={classes.hr}/>
                 <Box m={1} className={classes.menuItems}>
                  <Typography>
                     Total Amout Paid <span className={classes.menuPrice}>₹ 3570</span>
                  </Typography>
                 </Box>
            </Paper>
        </div>
    )
}

export default SubscriptionPriceComp
