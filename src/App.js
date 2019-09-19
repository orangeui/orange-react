import React, { Component } from 'react'
import { render } from 'react-dom'
import Dropdown from '../components/Dropdown'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{width: 900, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "30px auto"}}>

                <Dropdown
                    label="This is the label"
                    placeholder="Placeholder"
                    description="This is the description"
                    id="example-id1"
                >
                    <li onClick={e => console.log('clicked')}>Example 1</li>
                    <li onClick={e => console.log('Clicked second one')}>Example 2</li>
                    <li onClick={e => console.log('Clicked third one')}>Example 3</li>
                    <li onClick={e => console.log('Clicked fourth one')}>Example 4</li>
                    <li onClick={e => console.log('Clicked fifth one')}>Example 5</li>
                </Dropdown>

                <Dropdown
                    label="This is the label"
                    placeholder="Placeholder"
                    description="This is the description"
                    id="example-id2"
                >
                    <li onClick={e => console.log('clicked')}>Example 1</li>
                    <li onClick={e => console.log('Clicked second one')}>Example 2</li>
                    <li onClick={e => console.log('Clicked third one')}>Example 3</li>
                    <li onClick={e => console.log('Clicked fourth one')}>Example 4</li>
                    <li onClick={e => console.log('Clicked fifth one')}>Example 5</li>
                </Dropdown>

                <Dropdown
                    large
                    label="This is the label"
                    placeholder="Placeholder"
                    description="This is the description"
                    id="example-id3"
                >
                    <li onClick={e => console.log('clicked')}>Example 1</li>
                    <li onClick={e => console.log('Clicked second one')}>Example 2</li>
                    <li onClick={e => console.log('Clicked third one')}>Example 3</li>
                    <li onClick={e => console.log('Clicked fourth one')}>Example 4</li>
                    <li onClick={e => console.log('Clicked fifth one')}>Example 5</li>
                </Dropdown>
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))
