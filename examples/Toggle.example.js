import React, { Component, useState } from 'react'
import { render } from 'react-dom'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{width: 900, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "30px auto"}}>
                <Toggle
                    id="one"
                    onChange={e => console.log(e.target.value)}
                />
                <Toggle
                    id="two"
                    label="Label text"
                />
                <Toggle
                    id="three"
                    label="Label text"
                    size="large"
                    enabledText="On"
                    disabledText="Off"
                />
                <Toggle
                    id="four"
                    label="Label text"
                    size="large"
                    enabledText="Ready"
                    disabledText="Not Ready"
                    color="green"
                />
            </div>
        )
    }
}

export default function Toggle (props) {
    let className = 'toggle'
    const [checked, setChecked] = useState(false)
    if (checked) className += ` is-checked`
    if (props.label) className += ` toggle--label`
    if (props.size == 'large') className += ` toggle--large`
    if (props.color) className += ` toggle--color-${props.color}`
    if (props.className) className += ` ${props.className}`
    return (
        <form className="form">
            <div className="form__item">
                <div className={className}>
                    <div className="toggle__button">
                        <input
                            type="checkbox"
                            className="toggle__input"
                            id={props.id}
                            onChange={e => {
                                e.target.value = !checked
                                setChecked(!checked)
                                if (props.onChange) props.onChange(e)
                            }}
                            checked={checked}
                        />
                        <label className="toggle__label" htmlFor={props.id}>
                            {props.size == 'large' ? null : props.label}
                        </label>
                    </div>
                    {props.size == 'large' ? (
                        <div>
                            <label htmlFor={props.id} className="toggle__text">{props.label}</label>
                            <div className="toggle__value">
                                {checked ? props.enabledText : props.disabledText}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </form>
    )
}

render(<App />, document.querySelector('#root'))
