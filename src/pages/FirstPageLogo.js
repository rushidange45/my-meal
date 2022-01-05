import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import myMealLogo from '../assets/myMeal Logo.svg';
import splashBG from'../assets/splashBG.svg';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
 const useStyles = makeStyles(({
    logoImage:
     props=> props.flagToSetLogoAtTop ?
      {position:"absolute",left:"25%", right:"25%"} : { position:'absolute',
      top:"50%",
      left:"50%",
      transform:"translate(-50%, -50%)"} 
    }      
 ))


function FirstPageLogo( props) {
    const classes = useStyles(props)
    const history = useHistory();
  
    return (
        <div >
           <div className={classes.logoImage}>
              <img src ={myMealLogo} alt='appLogo' onClick={() => history.push('/login')} />
            </div>
        </div>
    )
}

export default FirstPageLogo
