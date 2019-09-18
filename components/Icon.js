/**
 * Usage:
 *     <Icon symbol="dashboard"/>
 *
 * Attributes:
 *     color="your-color"
 *     symbol="symbol-name"
 *
 * Examples:
 *     <Icon symbol="dashboard" color="red" />
 *     <Icon symbol="dashboard" />
 */

import React from 'react'

export default function Icon (props) {
    let className = ""
    if (props.color) className = `color-${props.color}`
    if (props.symbol) className += ` icon-${props.symbol}`
    return (
        <span className={className}></span>
    )
}
