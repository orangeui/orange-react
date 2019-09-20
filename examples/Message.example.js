import React, { Component } from 'react'
import { render } from 'react-dom'
import Avatar from '../components/Avatar'
import Button from '../components/Button'
import Message from '../components/Message'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{width: 900, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "30px auto"}}>
                <Message>A basic message</Message>
                <Message full color="blue">A full sized message</Message>
                <Message
                    color="green"
                    button={
                        <Button size="small">Click me</Button>
                    }
                >
                    <h6>Message title</h6>
                    <p>Message content</p>
                </Message>
                <Message
                    color="green"
                    avatar={
                        <Avatar circle color="blue" size="small" />
                    }
                    button={
                        <Button size="small">Click me</Button>
                    }
                >
                    <h6>Message title</h6>
                    <p>Message content</p>
                </Message>
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))
