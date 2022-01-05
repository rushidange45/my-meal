import React from 'react'
import{Box, Typography} from '@material-ui/core';


function Greetings({useStyles,userFlag,user}) {
    console.log(user)
    const classes = useStyles()
  
    return (
        <div>
              <Box className={classes.greetingBox }>                 {/**This is greeting */}
                 <Typography variant = "h5" className={classes.typography } >
                     {userFlag ? `Hey ${user}` : " Hey There"}!
                 </Typography>
                 <Typography variant='subtitle2' style={{marginBottom:"10px"}} >
                     Thanks for Choosing Us
                 </Typography>
             </Box>
        </div>
    )
}

export default Greetings
