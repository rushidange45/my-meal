import React,{useState, useEffect} from 'react'
import {Paper, Typography, Input, Box, Button} from "@material-ui/core"
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const ValidNumber =({flag, message}) => {     {/**Component to show message based on flag  */}
return(<>
 { flag ?  <Typography variant ="body2" style ={{color:"red"}} gutterBottom> {message} </Typography> : 
<Typography variant ="body2" color="primary" gutterBottom> {message} </Typography>}
</>
)
}

function UserDetailForm({useStyles, changeRoute, functionToSetUserName}) {

    const classes = useStyles();
    const [name, setName] = useState("")
    const [flag, setFlag] = useState(false)
    const [message, setMessage] = useState("OTP will be sent on this number")
    const [validNumber, setValidNumber] = useState(0)
    const history = useHistory();
     
  
    
    const conditionToCheckValidNumber = (!isNaN(validNumber) && validNumber.length == 10 ) ? true :false;
   
    const toEnterValidNumber = (e) => {   {/**Function to set value of entered mobile number*/}
        setValidNumber(e.target.value);     
    }

   const toDisplayErrorMessage = (e) => {   {/**To display error message if any field is empty or entered wrong mobile number */}
        // toShowOTPSentSuccessfullyMsg();
        if(message == "Enter a valid Number"){
            setFlag(false);
            setMessage("OTP will be sent on this mobile number")
        }
        if( conditionToCheckValidNumber && name == ""){   // true && false
            setFlag(true);
            setMessage("Enter a valid Number")
        }
        else if(conditionToCheckValidNumber && name != ""){   // true && true
            setMessage("OTP sent successfully")
            setTimeout( () => {
                console.log({changeRoute})
                console.log('runnnn')
                // functionToSetUserName(name)
                routeToNavigateToWhichPage(changeRoute)
                
            },1000)
         } else 
           setMessage("Enter a valid number")
        
       
      }


      const toSetNameofUser= (e) => {                {/**Function to set value of entered userName*/}
        setName(e.target.value)
      }
      
      

      const routeToNavigateToWhichPage = (changeRoute) =>
        //  { console.log(onClickFunction);
         changeRoute ?  history.push({pathname: "/verify", state: { name }})  : null

      useEffect(() => {
        <ValidNumber flag = {flag} message ={message} />     
        // console.log(changeRoute)  
    })
    return (
        <div>
            
            <Paper component={Box}  className={classes.paperComponent}>      {/**This is paper component which includes user detail form*/}
                 <Typography style={{fontSize:"15px", fontWeight:"bold", marginTop:"13px"} } > 
                     Enter Your details to Proceed
                 </Typography>
                 <Input placeholder='Name' type='text' disableUnderline className={classes.input} 
                  onChange={(e) => {toSetNameofUser(e)}} />
                 
                 <Input placeholder='Mobile Number' type='number' disableUnderline className={classes.input} 
                 onChange={(e) => {toEnterValidNumber(e)}} />
               
                 <ValidNumber flag = {flag} message = {message} />
                 
                
                  <Button variant='contained' color="primary"
                   className={classes.buttons} onClick={(e) => {toDisplayErrorMessage(e)} }>Next</Button>
               
                 <Button  className={classes.buttons}>Skip</Button>
             </Paper>
        </div>
    )
}

export default UserDetailForm
