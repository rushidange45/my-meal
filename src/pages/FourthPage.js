import React from 'react'
import SecondPage from './SecondPage'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


function FourthPage() {
   const history = useHistory()
   const anotherMessage= "Enter your mobile number to proceed"     //This is also used to display single field of mobile number on fourth page
   console.log({history}) 

   const printName = () => {
    console.log('ABC');
    const num = 5 + 7
    console.log(num)
}

   return (
        <div>
                <SecondPage  userFlagFromAnotheComp={true}
                 anotherMessage = {anotherMessage}
                 user={history.location.state.name}
                 onClick={printName}
                 />
        </div>
    )
}

export default FourthPage
          {/* <Box m={"10%"}>
                <FirstPageLogo  flagToSetLogoAtTop={true} />
            </Box>
            <Greetings useStyles = {useStyles} userFlag ={userFlag} user={user} />   {/**This is Greetings component
             *   in this  if userFlag is true then at greeting component it will print "Hey userName" and if false it will be 
             * "hey there"
             */} 