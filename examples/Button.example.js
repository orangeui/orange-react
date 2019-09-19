import React, { Component } from 'react'
import { render } from 'react-dom'
import Button from '../components/Button'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{width: 900, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "30px auto"}}>
                <Button>Press me</Button>
                <Button
                    role="secondary"
                >Press me</Button>
                <Button
                    role="secondary basic"
                >Press me</Button>
                <Button
                    size="large"
                >Press me</Button>
                <Button
                    size="small"
                >Press me</Button>
                <Button
                    wide
                >Press me</Button>
                <Button
                    iconOnly
                ><i className="icon-remove"></i></Button>
                <Button disabled>Press me</Button>
                <Button color="green">Press me</Button>
                <Button inverted color="red">Press me</Button>
                <Button inverted>Press me</Button>
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))
