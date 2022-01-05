import React, { useState, useEffect} from 'react'
import FirstPageLogo from './FirstPageLogo'
import myMealLogo from '../assets/myMeal Logo.svg';
import splashBG from'../assets/splashBG.svg';
import { Link } from 'react-router-dom';
import { Box,Grid, Container, Input, makeStyles, Paper, Typography, Button } from '@material-ui/core';
import Greetings from '../components/Map/Greeting/Greetings';
import UserDetailForm from '../components/Map/userDetailForm/UserDetailForm';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const useStyles = makeStyles(({
   firstPageLogo:{
       margin:"10%"
   },
   greetingBox:{
        position:'absolute',
        top:'27%',
       
   },
   typography:{
    fontSize:"30px",
    marginTop:"30%",
    textAlign:"justify",
    fontWeight:"bold"
    
   },
   paperComponent:{
       position:"absolute",
       top:"47%",
        margin:"0% auto",
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
       margin:"10px",
       padding:"10px",

   }
}))
function SecondPage({userFlagFromAnotheComp, thirdpage,user}) {
    const[userName,setUserName] = useState("")
    function functionToSetUserName(name){
     setUserName(name)
    }
    const history = useHistory();
    const classes = useStyles();
    console.log({thirdpage})
     const userFlag = userFlagFromAnotheComp ? `${userFlagFromAnotheComp}` : false ;
     const changeRoute = history?.location?.pathname?.split('/')?.pop() === 'login';
    //  const user = history.push({state: { name:userName }}) 
     return (
        <div>
         <Container style={{display: "grid",}}>
             <Box className={classes.firstPageLogo}>           {/**This is logo component */}
                 <FirstPageLogo flagToSetLogoAtTop={true} />
             </Box>

            <Greetings useStyles = {useStyles} userFlag ={userFlag} user={user} />   {/**This is Greetings component
             *   in this  if userFlag is true then at greeting component it will print "Hey userName" and if false it will be 
             * "hey there"
             */}

            <UserDetailForm useStyles= {useStyles} functionToSetUserName={functionToSetUserName} changeRoute={changeRoute}/> {/**send user as props to apply as value to input box */}
         </Container>
         </div>    
    )
}

export default SecondPage




