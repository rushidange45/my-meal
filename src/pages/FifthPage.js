import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import FirstPageLogo from './FirstPageLogo'
import Greetings from '../components/Greeting/Greetings'
import SecondPage from './SecondPage'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function FifthPage() {
 const history = useHistory();
//  console.log(propFromFifthPage)
 return (
        <div>
            
         <SecondPage userFlagFromAnotheComp={true} propFromFifthPage = { true} 
         mobileNumber = {history.location.state.mobileNumber} />
        </div>
    )
}

export default FifthPage
