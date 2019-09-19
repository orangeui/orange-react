import React, { Component } from 'react'
import { render } from 'react-dom'
import Checkbox from '../components/Checkbox'
import CheckboxGroup from '../components/CheckboxGroup'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{width: 900, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "30px auto"}}>
                <Checkbox id="example" onChange={(e, clicked) => console.log('Clicked example', clicked)}>
                    Example checkbox
                </Checkbox>

                <br/><br/>

                <Checkbox id="exampleW" checked onClick={(e, clicked) => console.log('Clicked example 2', clicked)}>
                    Checked checkbox
                </Checkbox>

                <br/><br/>

                <Checkbox id="exampleX" disabled>
                    Disabled checkbox
                </Checkbox>

                <br/><br/>

                <CheckboxGroup label="Group label" description="This is a group description">
                    <Checkbox id="example1">
                        Example checkbox
                    </Checkbox>
                    <Checkbox id="example2">
                        Example checkbox
                    </Checkbox>
                    <Checkbox id="example3">
                        Example checkbox
                    </Checkbox>
                </CheckboxGroup>
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))
