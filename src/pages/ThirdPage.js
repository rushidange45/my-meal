import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import SecondPage from './SecondPage'

function ThirdPage() {
    const history = useHistory()
    console.log(history, 'third')
    return (
        <div>
            <SecondPage userFlagFromAnotheComp={true} thirdpage={true} user={history.location.state.name} />
        </div>
    )
}

export default ThirdPage
