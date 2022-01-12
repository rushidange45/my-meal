import React, { useState, useEffect} from 'react'
import FirstPageLogo from './FirstPageLogo'
import { Box,Grid, Container, Input, makeStyles, Paper, Typography, Button } from '@material-ui/core';
import Greetings from '../components/Greeting/Greetings';
import UserDetailForm from '../components/userDetailForm/UserDetailForm';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const useStyles = makeStyles(({
   firstPageLogo:{
       marginTop:"10%"
   },
   greetingBox:{
        position:'absolute',
        top:'18%',
       
   },
   typography:{
        fontSize:"30px",
        marginTop:"30%",
        textAlign:"justify",
        fontWeight:"bold"
    
   },
   paperComponent:{
        position:"absolute",
        top:"40%",
        margin:"5% auto",
        width:"90%",
        height:"fitContent",
        fontWeight:"bold",
        borderRadius:"15px"
   },
   input:{
       border:"1px solid black",
       borderRadius:"30px",
       padding:"10px",
       margin:"10px",
       width:"80%"
   },
   buttons:{
       width:"80%",
       borderRadius:"30px",
       margin:"10px 0 15px 0",
       padding:"10px",
    },
    BoxItemFifthPage:{
        display:"flex",
        justifyContent:"space-around"
    },
    inputFromFifthPage:{
        width: "90%",
        height:"18%",
        fontSize:"30px",
        borderLeft:"1px solid black",
        margin:"4% 0"
    },
    fifthPageTypography:{
        fontSize:"12px",
         fontWeight:"bold", 
         textAlign:"justify",
         margin:"6% 0 4% 15px"
    },
    secondFifthPageTypography:{
        fontSize:"12px",
        color:"grayText",
        paddingBottom:"8%"
        }
}))
function SecondPage({userFlagFromAnotheComp,
    onClick,
     propFromFifthPage, mobileNumber,user, changeRouteToFourthPage, anotherMessage}) {
    const[userName,setUserName] = useState("")
    const history = useHistory();
    const classes = useStyles();
    console.log({mobileNumber})
     const userFlag =true
     const changeRoute = history?.location?.pathname?.split('/')?.pop();
   
   
    function functionToSetUserName(name){
        setUserName(name)
       }
     return (
        <div>
         <Container style={{display: "grid",}}>
             <Box className={classes.firstPageLogo}>           {/**This is logo component */}
                 <FirstPageLogo flagToSetLogoAtTop={true} />  {/**This flagToSetLogoAtTop is used to set logo at top */}
             </Box>

            <Greetings useStyles ={useStyles} userFlag ={userFlag} user={user} mobileNumber={mobileNumber} />   {/**This is Greetings component
             *   in this  if userFlag is true then at greeting component it will print "Hey userName" and if false it will be 
             * "hey there"
             */}
            <UserDetailForm useStyles= {useStyles}
             functionToSetUserName={functionToSetUserName} 
             value = {user} changeRoute={changeRoute}
             changeRouteToFourthPage = {changeRouteToFourthPage}
             anotherMessage={anotherMessage}
             propFromFifthPage={propFromFifthPage}  />     {/**send user as props to apply as value to input box */}
             
         </Container>
         </div>    
    )
}

export default SecondPage




