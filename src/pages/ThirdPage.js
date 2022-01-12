import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import SecondPage from './SecondPage'

function ThirdPage() {
    const history = useHistory()
    const changeRouteToFourthPage =  history?.location?.pathname?.split('/')?.pop() === 'verify';
    console.log(history, 'third')

    const printRushikesh = () => {
        console.log('rushikesh');
    }

    return (
        <div>
            <SecondPage userFlagFromAnotheComp={true}
             changeRouteToFourthPage= {changeRouteToFourthPage}
             thirdpage={true} user={history.location.state.name}  onClick={printRushikesh}/>
        </div>
    )
}

export default ThirdPage
