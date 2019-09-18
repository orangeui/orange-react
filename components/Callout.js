/**
 * Usage:
 *     <Callout [all-optional-attributes]>Text</Callout>
 *
 * Attributes:
 *     color="your-color"
 *     shadow OR shadow="true" OR shadow="false"
 *     action OR action="true" OR action="false"
 *
 * Examples:
 *     <Callout><p>This is a callout</p></Callout>
 *     <Callout color="green"><p>This is a callout</p></Callout>
 *     <Callout shadow="true"><p>This is a callout</p></Callout>
 *     <Callout action="true"><p>This is a callout</p></Callout>
 *     <Callout color="red"><p>This is a callout</p></Callout>
 */

import React from 'react'

export default function Callout (props) {
    let className = "callout"
    if (props.color) className += ` callout--color-${props.color}`
    if (props.shadow && props.shadow != 'false') className += ` callout--shadow`
    if (props.action && props.action != 'false') className += ` callout--action`
    return (
        <div className={className}>
            {props.children}
        </div>
    )
}
