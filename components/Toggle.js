/**
 * Usage:
 *     <Toggle id="required-id" [other-optional-attributes] />
 *
 * Attributes:
 *     id="your-id"
 *     label="your-label"
 *     size="large"
 *     color="your-color"
 *     enabledText="custom-on-message"
 *     enabledText="custom-off-message"
 *     className="your-custom-class"
 *
 * Examples:
 *     <Toggle
 *         id="one"
 *         onChange={e => console.log(e.target.value)}
 *     />
 *
 *     <Toggle
 *         id="two"
 *         label="Label text"
 *     />
 *
 *     <Toggle
 *         id="three"
 *         label="Label text"
 *         size="large"
 *         enabledText="On"
 *         disabledText="Off"
 *     />
 */

import React, { useState } from 'react'

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
