/**
 * Usage:
 *     <form>
 *         <Dropdown [all-optional-attributes]>
 *             <li>Example 1</li>
 *             <li>Example 2</li>
 *             <li>Example 3</li>
 *             <li>Example 4</li>
 *             <li onClick={// Do something when you click this}>Example 5</li>
 *         </Dropdown>
 *     </form>
 *
 * Attributes:
 *     id="a-unique-id"
 *     label="label-text"
 *     placeholder="text"
 *     description="text"
 *     disabled OR disabled="true" OR disabled="false"
 *
 * Examples:
 *     <Avatar circle color="red" size="large" />
 *     <Avatar size="small" />
 */

import React from 'react'

export default function Dropdown (props) {
    let disabled = false
    if (props.disabled && props.disabled != 'false') disabled = true
    return (
        <div className="form__item">
            <div id={props.id} {...props} className={disabled ? "form-dropdown is-disabled" : "form-dropdown"}>
                <label htmlFor={props.id} className="form-dropdown__label">{props.label}</label>
                <input id={props.id} type="text" name="form_dropdown" className="form-dropdown__input" />
                <div className="form-dropdown__text">{props.placeholder}</div>
                <div className="form-dropdown__icon">
                    <svg viewBox="0 0 24 24">
                        <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                        <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </div>
                <div className="form-dropdown__content">
                    <ul className="form-dropdown__menu">
                        {props.children}
                    </ul>
                </div>
            </div>
            <div className="form__description">{props.description}</div>
        </div>
    )
}
