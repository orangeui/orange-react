import React, { Component } from 'react'
import { render } from 'react-dom'
import Callout from '../components/Callout'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{width: 900, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "30px auto"}}>
                <Callout><p>This is a callout</p></Callout>
                <Callout color="green"><p>This is a callout</p></Callout>
                <Callout shadow="true"><p>This is a callout</p></Callout>
                <Callout action="true" onClick={e => console.log('Clicked')}><p>This is a callout</p></Callout>
                <Callout color="red"><p>This is a callout</p></Callout>
                <Callout shadow="false"><p>This is a callout</p></Callout>
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))
