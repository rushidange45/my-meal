import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import myMealLogo from '../assets/myMeal Logo.svg';
import splashBG from'../assets/splashBG.svg';
 const useStyles = makeStyles(({
    logoImage:
     props=> props.flagToSetLogoAtTop ?
      "" : { position:'absolute',
      top:"50%",
      left:"50%",
      transform:"translate(-50%, -50%)"} 
    }      
 ))


function FirstPageLogo( props) {
    const classes = useStyles(props)
  
    return (
        <div >
           <div className={classes.logoImage}>
              <img src ={myMealLogo} alt='appLogo' />
            </div>
        </div>
    )
}

export default FirstPageLogo
