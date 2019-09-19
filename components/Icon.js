/**
 * Usage:
 *     <Icon symbol="dashboard"/>
 *
 * Attributes:
 *     color="your-color"
 *     symbol="symbol-name"
 *     id="your-id"
 *     className="your-custom-class"
 *
 * Examples:
 *     <Icon symbol="dashboard" color="red" />
 *     <Icon symbol="dashboard" />
 */

import React from 'react'

export default function Icon (props) {
    let className = props.className ? `${props.className}` : ""
    if (props.color) className = `color-${props.color}`
    if (props.symbol) className += ` icon-${props.symbol}`
    return (
        <span className={className} id={props.id}></span>
    )
}
