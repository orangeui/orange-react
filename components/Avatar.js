/**
 * Usage:
 *     <Avatar [all-optional-attributes] />
 *
 * Attributes:
 *     circle="true" OR circle="false" (omit cicle if you don't need it)
 *     size="small" OR size="large" OR size="auto"
 *     color="your-color-name"
 *     id="your-id"
 *     className="your-custom-class"
 *
 * Examples:
 *     <Avatar circle color="red" size="large" />
 *     <Avatar size="small" />
 */

import React from 'react'

export default function Avatar (props) {
    let className = props.className ? `avatar ${props.className}` : 'avatar'
    if (props.circle && props.circle != 'false') className += " avatar--circle"
    if (props.size) {
        switch (props.size) {
            case "small":
                className += " avatar--size-small"
                break
            case "large":
                className += " avatar--size-large"
                break
            case "auto":
                className += " avatar--size-auto"
                break
        }
    }
    if (props.color) className += ` avatar--color-${props.color}`
    return (
        <div className={className} id={props.id}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                length="auto"
                viewBox="0 0 80 80"
            >
                <path
                    fillRule="evenodd"
                    d="M28.61 41.645C31.89 43.768 35.8 45 40 45s8.11-1.232 11.39-3.355C67.934 46.551 80 61.866 80 80c0 22.091-17.909 40-40 40S0 102.091 0 80c0-18.134 12.067-33.45 28.61-38.355zM40 42c-9.941 0-18-8.059-18-18S30.059 6 40 6s18 8.059 18 18-8.059 18-18 18z"
                />
            </svg>
        </div>
    )
}
