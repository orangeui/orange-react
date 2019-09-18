import React, { Component } from 'react'
import { render } from 'react-dom'
import Dropdown from '../components/Dropdown'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{width: 900, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "auto"}}>

            <form className="form">
                <Dropdown
                    label="This is the label"
                    placeholder="Placeholder"
                    description="This is the description"
                    name="example-name"
                    id="example-id"
                >
                    <li>Example 1</li>
                    <li>Example 2</li>
                    <li>Example 3</li>
                    <li>Example 4</li>
                    <li>Example 5</li>
                </Dropdown>
            </form>

            <form className="form form--large">
                    <Dropdown
                        label="This is the label"
                        placeholder="Placeholder"
                        description="This is the description"
                        name="example-name"
                        id="example-id"
                    >
                        <li>Example 1</li>
                        <li>Example 2</li>
                        <li>Example 3</li>
                        <li>Example 4</li>
                        <li>Example 5</li>
                    </Dropdown>
                </form>
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))
