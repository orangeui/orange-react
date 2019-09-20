import React, { Component, useState } from 'react'
import { render } from 'react-dom'
import Radio from '../components/Radio'
import RadioGroup from '../components/RadioGroup'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{width: 900, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "30px auto"}}>
                <RadioGroup
                    onChange={value => {
                        console.log(value)
                    }}
                >
                    <Radio value="1" name="a">First</Radio>
                    <Radio value="2" name="a">Second</Radio>
                    <Radio value="3" name="a" disabled>Third</Radio>
                </RadioGroup>
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))
