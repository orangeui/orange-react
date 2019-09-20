/**
 * Usage:
 *     <Label [all-optional-attributes]>
 *         Label text
 *     </Label>
 *
 * Attributes:
 *     color="your-color"
 *     dismiss OR dismiss="true" OR dismiss="false" (Shows a clickable X icon
 *         that you can listen to when clicked using onClick={})
 *     icon="your-icon-name"
 *     size="small" OR size="pill" OR size="dot"
 *
 * Examples:
 *     <Avatar circle color="red" size="large" />
 *     <Avatar size="small" />
 */

import React from 'react'

export default function Label (props) {
    let className = "label"
    let icon = null
    if (props.color) className += ` label--${props.color}`
    if (props.dismiss && props.dismiss != 'false') {
        className += ` label--dismiss`
        icon = <i className="icon-x"></i>
    }
    if (props.size) className += ` label--${props.size}`
    if (props.icon) icon = <i className={`icon-${props.icon}`}></i>
    return (
        <span {...props} className={className} onClick={e => {
            if (props.onClick) props.onClick(e)
        }}>
            {props.children} {icon}
        </span>
    )
}
