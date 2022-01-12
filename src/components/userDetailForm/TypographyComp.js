import { Typography } from '@material-ui/core'
import React from 'react'

const TypographyComp = ({anotherMessage}) => {
    return(
        <>
              {
                    anotherMessage ? 
                        <Typography style={{fontSize:"15px", fontWeight:"bold", textAlign:"justify",margin:"8% 0 5% 10% "} } > 
                            {anotherMessage}
                        </Typography>
                    : 
                        <Typography style={{fontSize:"15px", fontWeight:"bold", textAlign:"justify",margin:"8% 0 5% 10% "} } > 
                            Enter Your details to Proceed
                        </Typography>
                }
        </>
    )
}

export default TypographyComp
