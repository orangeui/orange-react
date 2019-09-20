import React, { Component } from 'react'
import { render } from 'react-dom'
import Textarea from '../components/Textarea'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{width: 900, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "30px auto"}}>
                <Textarea
                    label="Write something"
                    description="You can write something there"
                />
                <Textarea
                    name="textarea"
                    rows="3"
                    label="Write something"
                    description="You can write something there"
                    size="large"
                />
                <Textarea
                    autoExpand
                    name="textarea"
                    rows="3"
                    label="Auto expand"
                    description="You can write something there"
                />
                <Textarea
                    readOnly
                    value="Example read only content"
                    name="textarea"
                    rows="3"
                    label="Read only"
                    description="You can write something there"
                />
                <Textarea
                    disabled
                    name="textarea"
                    rows="3"
                    label="Disabled textarea"
                    description="You can write something there"
                />
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))
