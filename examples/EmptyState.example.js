import React, { Component } from 'react'
import { render } from 'react-dom'
import Button from '../components/Button'
import EmptyState from '../components/EmptyState'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{width: 900, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "30px auto"}}>
                <EmptyState
                    title="It's your first time here"
                    description="A short explanation of this view or why it is empty. Longer texts span into multiple lines"
                    img="https://orangecss.com/images/empty-state.svg"
                >
                    <Button>Continue</Button>
                </EmptyState>
                <br/><br/>
                <EmptyState
                    no-gutter
                    title="Title"
                    description="Description"
                    img="https://orangecss.com/images/empty-state.svg"
                >
                    <Button>Custom Button</Button>
                </EmptyState>
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))
