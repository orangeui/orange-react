/**
 * Usage:
 *     <RadioGroup onChange={selectedValue => console.log(selectedValue)} />
 *        <Radio name="must-be-same-name" value="1">First</Radio>
 *        <Radio name="must-be-same-name" value="2">Second</Radio>
 *     </RadioGroup>
 *
 * Attributes:
 *     onChange={value => // Do something} (The onChange event gives you the
 *         selected value)
 *     id="your-id"
 *     className="your-custom-class"
 *
 * Example:
 *     <RadioGroup onChange={selectedValue => console.log(selectedValue)} />
 *        <Radio name="must-be-same-name" value="1">First</Radio>
 *        <Radio name="must-be-same-name" value="2">Second</Radio>
 *     </RadioGroup>
 */

import React from 'react'

export default function RadioGroup (props) {
    let className = "form__item"
    if (props.className) className += ` ${props.className}`
    return (
        <div className={className} id={props.id} >
            <div
                className="radio-group"
                onClick={e => {
                    if (e.target.dataset.name && props.onChange) {
                        props.onChange(e.target.parentNode.querySelector('input').value)
                    }
                }}
            >
                <div className="radio-group__label">{props.label}</div>
                {props.children}
            </div>
            {props.description ? (
                <div className="form__description">{props.description}</div>
            ) : null}
        </div>
    )
}
