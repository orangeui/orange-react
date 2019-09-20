import React, { Component } from 'react'
import { render } from 'react-dom'
import Label from '../components/Label'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{width: 900, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "30px auto"}}>
                <Label>A label</Label>
                <Label color="red">A label</Label>
                <Label
                    dismiss="true"
                    onClick={e => console.log('do something')}
                >A label</Label>
                <Label size="small">A label</Label>
                <Label size="pill" color="yellow"></Label>
                <Label size="dot"></Label>
                <Label icon="skip">A label</Label>
                <Label icon="theme">A label</Label>
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))
