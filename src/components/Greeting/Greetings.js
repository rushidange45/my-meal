import React from 'react'
import{Box, Typography,Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom/cjs/react-router-dom.min'

function Greetings({useStyles,userFlag,user, mobileNumber}) {
    console.log(userFlag)
    const history = useHistory();
    const toCheckWeAreOnFifthPage = history?.location?.pathname?.split("/").pop() === "otpPage" ? true:false
    console.log(toCheckWeAreOnFifthPage)
    const flag = history?.location?.pathname?.split("/").pop() === "login" ? false:true
    const classes = useStyles()
  
    return (
        <div>
              <Box className={classes.greetingBox }>        
            {userFlag ? toCheckWeAreOnFifthPage?    
            <>      {/**This is greeting */}
                <Typography variant = "h5" className={classes.typography } >
                
                
                    <Typography variant='subtitle2' style={{marginTop:"10px 0", textAlign:"justify", color:'#404040',fontWeight:'bold', position:"relative"}} >
                    The OTP has been sent to <span style={{fontSize:"18px"}}>{mobileNumber} </span><span style={{right:"10%"}}><Button style={{color:"red", position:"absolute",left: "185px",top: "25px"}}>change</Button></span>
                    </Typography> 
                </Typography>
            </>
            :
            <>
            <Typography variant="h5" className={classes.typography}>
                    {flag?  `Hey ${user}` : " Hey There"}!
                </Typography><Typography variant='subtitle2' style={{ marginTop: "10px 0", textAlign: "justify", color: '#404040', fontWeight: 'bold' }}>
                        Thanks for Choosing Us
                    </Typography>
            </>
            : ""}
            
             </Box>
        </div>
    )
}

export default Greetings
