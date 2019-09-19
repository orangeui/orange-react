/**
 * Usage:
 *     <Input [all-optional-attributes] />
 *
 * Attributes:
 *     readOnly OR readOnly="true" OR readOnly="false"
 *     name="your-input-name"
 *     id="your-id"
 *     type="your-type" (The default is type="text")
 *     onChange={() => {}} (Doesn't do anything by default unless you add it)
 *     label="your-label"
 *     description="the description"
 *     left={} (Can be a text, a button or whatever you need)
 *     right={} (Can be a text, a button or whatever you need)
 *
 * Note: Change the containing form className to "form form--large" if you need a
 *       large input.
 *
 * Examples:
 *     <form className="form">
 *         <Input
 *             id="a"
 *             label="This is the input label text"
 *             description="My custom input description"
 *             name="example-name"
 *             onChange={e => {console.log(e.target.value)}}
 *         />
 *     </form>
 */

import React from 'react'

export default function Input (props) {
    let inputClass = "form__input"
    let readOnly = false
    let hasSides = false
    if (props.left || props.right) hasSides = true
    if (props.readOnly && props.readOnly != 'false') readOnly = true
    if (readOnly) inputClass += ' has-value'
    return (
        <div className={hasSides ? "form__item has-action" : "form__item"}>
            {props.left ? <div className="form__action">{props.left}</div> : null}

            <div className="form__input-wrapper">
                <input
                    {...props}
                    name={props.name}
                    readOnly={readOnly}
                    id={props.id}
                    type={props.type || 'text'}
                    className={inputClass}
                    onChange={e => {
                        if (props.onChange) props.onChange(e)
                    }}
                />
                <label htmlFor={props.id} className="form__label">{props.label}</label>
            </div>

            {props.right ? <div className="form__action">{props.right}</div> : null}

            <p className="form__description">{props.description}</p>
        </div>
    )
}
