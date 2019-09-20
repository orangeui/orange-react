/**
 * Usage:
 *     <RadioGroup onChange={selectedValue => console.log(selectedValue)} />
 *        <Radio name="must-be-same-name" value="1">First</Radio>
 *        <Radio name="must-be-same-name" value="2">Second</Radio>
 *     </RadioGroup>
 *
 * Attributes:
 *     name="your-name" (The name must be the same for all radio buttons in the group)
 *     value="your-value"
 *     disabled OR disabled="true" OR disabled="false"
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

export default function Radio (props) {
    let className = "radio"
    if (props.className) className += ` ${props.className}`
    return (
        <div className={className}>
            <input
                id={props.id}
                type="radio"
                name={props.name}
                value={props.value}
                disabled={props.disabled && props.disabled != 'false'}
            />
            <label htmlFor={props.id} data-name="label" onClick={e => {
                let children = e.target.parentNode.parentNode.querySelectorAll('input')
                for (let i = 0; i < children.length; i++) {
                    children[i].removeAttribute('checked')
                }
                if (e.target.parentNode.querySelector('input')) {
                    e.target.parentNode.querySelector('input').setAttribute('checked', '')
                }
            }}>
                {props.children}
            </label>
        </div>
    )
}
