import React, { Component } from 'react'
import { render } from 'react-dom'
import Icon from '../components/Icon'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{width: 900, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "auto"}}>
                <Icon
                    symbol="dashboard"
                    color="red"
                />
                <Icon
                    symbol="dashboard"
                />
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))
