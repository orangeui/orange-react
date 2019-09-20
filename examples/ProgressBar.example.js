import React, { Component } from 'react'
import { render } from 'react-dom'
import ProgressBar from '../components/ProgressBar'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{width: 900, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "30px auto"}}>
                <ProgressBar
                    percentage="80"
                />
                <br/><br/>
                <ProgressBar
                    color="sapphire"
                    percentage="10"
                >Loading...</ProgressBar>
                <br/><br/>
                <ProgressBar
                    strokeWidth="50"
                    percentage="50"
                    color="green"
                >Loading...</ProgressBar>
                <br/><br/>
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))
