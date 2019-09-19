/**
 * Usage:
 *     <CheckboxGroup [all-optional-properties]>
 *         <Checkbox id="example">Example checkbox</Checkbox>
 *         <Checkbox id="example2">Example checkbox</Checkbox>
 *     </CheckboxGroup>
 *
 * Attributes:
 *     label="your-label-text"
 *     description="your-group-description"
 *     id="your-id"
 *     className="your-custom-class"
 *
 * Example:
 *     <CheckboxGroup label="Group label" description="This is a group description">
 *         <Checkbox id="example1">
 *             Example checkbox
 *         </Checkbox>
 *         <Checkbox id="example2">
 *             Example checkbox
 *         </Checkbox>
 *         <Checkbox id="example3">
 *             Example checkbox
 *         </Checkbox>
 *     </CheckboxGroup>
 */

import React from 'react'

export default function CheckboxGroup (props) {
    return (
        <div
            className={props.className ? `form__item ${props.className}` : "form__item"}
            id={props.id}
        >
            <div className="checkbox-group">
                <div className="checkbox-group__label">{props.label}</div>
                {props.children}
            </div>
            <div className="form__description">{props.description}</div>
        </div>
    )
}
