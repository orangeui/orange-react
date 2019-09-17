/**
 * Usage:
 *     <Button [all-optional-properties]>
 *
 * Attributes:
 *     role="primary" OR role="secondary" OR role="basic" OR role="primary basic"
 *     (You can specify multiple roles separated by 1 space)
 *     color="your-color"
 *     size="small" OR size="large"
 *     wide OR wide="true"
 *     inverted OR inverted="true"
 *     iconOnly OR iconOnly="true" (When all you have is an icon inside and want less padding)
 *     disabled OR disabled="true"
 *
 * Examples:
 *     <Button></Button>
 *     <Button role="secondary"></Button>
 *     <Button role="secondary basic">Press me</Button>
 *     <Button size="large"></Button>
 *     <Button wide></Button>
 *     <Button disabled></Button>
 *     <Button iconOnly><i className="icon-remove"></i></Button>
 *     <Button color="green"></Button>
 *     <Button inverted></Button>
 */

import React from 'react'

export default function Button (props) {
    let className = 'button'
    if (props.role && props.role.trim().split(' ').length > 0) {
        let roles = props.role.trim().split(' ')
        for (let i = 0; i < roles.length; i++) {
            className += ` button--${roles[i]}`
        }
    } else if (props.role) {
        className += ` button--${props.role}`
    }
    if (props.color) className += ` button--color-${props.color}`
    if (props.size) className += ` button--${props.size}`
    if (props.wide && props.wide != 'false') className += " button--wide"
    if (props.inverted && props.inverted != 'false') className += " button--inverted"
    if (props.iconOnly && props.iconOnly != 'false') className += ` button--icon-only`

    return (
        <button type={props.type} disabled={props.disabled && props.disabled != 'false'} className={className}>
            {props.children}
        </button>
    )
}
