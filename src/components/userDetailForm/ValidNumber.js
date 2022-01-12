import React from 'react'
import {Typography} from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { Error } from '@material-ui/icons'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const ValidNumber =({flag, message,changeUserNameAtPlaceholder, anotherMessage}) => {     {/**Component to show message based on flag  */}
// console.log({anotherMessage})
// const history = useHistory()
return(<>

{

     flag ? <Typography variant ="body2" style ={{color:"red"}} gutterBottom> {message} </Typography> : 
     anotherMessage ? <Typography variant ="body2" style ={{color:"red"}} gutterBottom>
         <Error style={{fontSize: "12px"}}/><span style={{marginLeft:"2px"}}>Enter a valid mobile number</span></Typography>:
     <Typography variant ="body2" color="primary" gutterBottom> {changeUserNameAtPlaceholder?
        <Typography variant ="body2" style ={{color:"green"}} gutterBottom><CheckCircleIcon fontSize='small'/>OTP sent successfully 
       </Typography> : message }
     </Typography> 
          
}
</>
)
}


export default ValidNumber
