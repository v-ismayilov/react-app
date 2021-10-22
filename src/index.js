import react from 'react'
import reactDOM from 'react-dom'

import Main from './components/Main'

const Index = () => {
    return (
        <div>
            <div>
                Index
            </div>
            <div>
                <Main />
            </div>
        </div>
    )
}

reactDOM.render(<Index />, document.querySelector('#root'))
