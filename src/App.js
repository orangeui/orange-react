import React, { Component } from 'react'
import { render } from 'react-dom'
import Icon from '../components/Icon'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{width: 900, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "auto"}}>
            </div>
        )
    }
}

export default function Input (props) {
    return (
        <div className="form__item">
            <input id={props.id} type="text" name="form_id" placeholder="Label" className="form__input" />
            <label htmlFor={props.id} className="form__label">{props.label}</label>
            <p className="form__description">{props.description}</p>
        </div>
    )
}

render(<App />, document.querySelector('#root'))
