import React,{useState, useEffect, cloneElement} from 'react'
import {Paper, Typography, Input, Box, Button,Grid, TextField} from "@material-ui/core"
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Error } from '@material-ui/icons';
import ValidNumber from './ValidNumber';
import TypographyComp from './TypographyComp';


function UserDetailForm({useStyles,propFromFifthPage, changeRoute, value, fromFourthToFifth, anotherMessage}) {

    const classes = useStyles();
    const [name, setName] = useState("")
    const [inputOne, setInputOne]      = useState(0);
    const [flag, setFlag] = useState(false)
    const [message, setMessage] = useState("OTP will be sent on this number")
    const [validNumber, setValidNumber] = useState(0)
    const history = useHistory();
    const changeUserNameAtPlaceholder = history?.location?.pathname?.split('/')?.pop() === 'verify' ;
    const conditionToCheckValidNumber = (!isNaN(validNumber) && validNumber.length == 10 ) ? true :false;
     
    {/** ↓ Function to set value of entered userName*/}
    const toSetNameofUser= (e) => {                
     setName(e.target.value);
    
    }
    {/** ↓ Function to set value of entered mobile number*/}
    const toEnterValidNumber = (e) => {  
        setValidNumber(e.target.value);  
    }

    {/** ↓ function to display error message if any field is empty or entered wrong mobile number */}
    const toDisplayErrorMessage = (e) => {   
       
        if(message == "Enter a valid Number"){
            return setFlag(true),
            setMessage("OTP will be sent on this mobile number")
        }
        console.log({name})
        if(conditionToCheckValidNumber && name != "" &&  changeRoute === 'login' || changeRoute === "verify"){   // true && true
                setMessage("OTP sent successfully")
                setTimeout( () => {
                    routeToNavigateToWhichPage(changeRoute)          
                    setName(value)
                    
                },1000)
             }
            // if( conditionToCheckValidNumber && name == ""){   // true && false
            // return setFlag(false),
            // setMessage("Enter a valid Number")
        // }
        if( changeRoute === 'enterMobileNumberToProceed')
           if(conditionToCheckValidNumber) 
               setTimeout( () => {
                            routeToNavigateToWhichPage(changeRoute)          
                            setName(value)
                            
                         },1000)
          if( changeRoute === 'otpPage')
              setTimeout( () => {
                            routeToNavigateToWhichPage(changeRoute)          
                            setName(value)
                            },1000
                        )                 
        
         return setMessage("Enter a valid number")
        
       
      }   


    const routeToNavigateToWhichPage = (changeRoute) => {
        console.log({changeRoute})
        if(changeRoute === 'login') {
               return history.push({pathname: "/verify", state: { name, value }})
        }
        if(changeRoute === 'verify') {
              return  history.push({pathname: "/enterMobileNumberToProceed", state: { name, value }})
            }
            if(changeRoute === 'enterMobileNumberToProceed') {
            return  history.push({pathname: "/otpPage", state: { name, value, mobileNumber:validNumber }})
        }
        if(changeRoute === 'otpPage') {
            return  history.push({pathname: "/", state: { name, value, mobileNumber:validNumber }})
        }
    }
    const toSetValueOfInputOne = (e) => {
      setInputOne(e.target.value)
            
    }   
       
    
     const trialOne = ["1234","4545"]
   
    // adjust style of inout to center and set maxRow to one

      useEffect(() => {
        <ValidNumber flag = {flag} message ={message} />     
        // console.log(changeRoute)  
    })

    //1 false
    //12 false
    //123 false
    //1234 true
    const isDisabled = !trialOne.includes(inputOne)
   
    return (
        <div>
            
            <Paper component={Box}  className={classes.paperComponent}>      {/**This is paper component which includes user detail form*/}
              
                {  
                  anotherMessage ?    //If this is true then following code will be for fourth page
                  <div>
                        <TypographyComp  anotherMessage ={anotherMessage} />
                        <Input placeholder='Mobile Number'  type='number' disableUnderline className={classes.input } 
                        onChange={(e) => {toEnterValidNumber(e)}} />
                    
                        <ValidNumber flag = {flag} message = {message}  anotherMessage={true}  changeUserNameAtPlaceholder={changeUserNameAtPlaceholder}/>
                        
                        
                        <Button variant='contained' color="primary" disabled = { validNumber.length === 10? false :true}
                        className={classes.buttons} onClick={(e) => {toDisplayErrorMessage(e)} }>Next</Button>
                    
                        {/* <Button  className={classes.buttons}>Skip</Button> */}
                  </div> :
                    propFromFifthPage?    //If this is true then following code will be for fifth page
                     <div> 
                     <Box>
                       <Typography className={classes.fifthPageTypography}>Enter OTP</Typography>
                     </Box>
                     <Box>
                       <Paper>
                             <Box item className={classes.BoxItemFifthPage}>
                                    <Input className={classes.inputFromFifthPage} onChange={(e) => {toSetValueOfInputOne(e)}} type='number' maxRows={1} />
                             </Box>

                                  <Typography className={classes.secondFifthPageTypography}>00:45</Typography>
                                  <Typography className={classes.secondFifthPageTypography}>Didn't get the Code ?
                                    <Button style={{color:"red",marginLeft:"10px", fontSize:"10px", fontWeight:"bold"}}>Resend Code</Button></Typography>
                                  <Button className={classes.buttons} variant="contained" color="primary" disabled={isDisabled} onClick={toDisplayErrorMessage}>Submit</Button>
                         </Paper>
                     </Box>
                      
                    </div>:
                    <div>
                        <TypographyComp  anotherMessage ={anotherMessage} />
                        <Input placeholder={changeUserNameAtPlaceholder ? value :'Name'} type='text' value={name} disableUnderline className={classes.input} 
                        onChange={(e) => {toSetNameofUser(e)}} />
                        
                        <Input placeholder='Mobile Number'  type='number' disableUnderline className={classes.input } 
                        onChange={(e) => {toEnterValidNumber(e)}} />
                    
                        <ValidNumber flag = {flag} message = {message} anotherMessage={anotherMessage} changeUserNameAtPlaceholder={changeUserNameAtPlaceholder}/>
                        
                        
                        <Button variant='contained' color="primary"
                        className={classes.buttons} onClick={(e) => {toDisplayErrorMessage(e)} }>Next</Button>
                    
                        <Button  className={classes.buttons}>Skip</Button>
                    </div>
                }
             </Paper>
        </div>
    )
}

export default UserDetailForm
