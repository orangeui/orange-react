/**
 * Usage:
 *     <List [all-optional-attributes]>
 *        <li>
 *            Your content here
 *        </li>
 *     </List>
 *
 * Attributes:
 *     size="small" OR size="medium" OR size="large"
 *     divide OR divide="true" OR divide="false"
 *     hover OR hover="true" OR hover="false"
 *     noGutter OR noGutter="true" OR noGutter="false"
 *     id="your-id"
 *     className="your-custom-class"
 *
 * Examples:
 *     <List noGutter hover divide size="medium">
 *         <li>
 *             <div>
 *                 <h3>List title</h3>
 *                 <p>List content</p>
 *             </div>
 *             <div className="list__action">
 *                 <Button>Click me</Button>
 *             </div>
 *         </li>
 *         <li>
 *             <div>
 *                 <h3>List title</h3>
 *                 <p>List content</p>
 *             </div>
 *             <div className="list__action">
 *                 <Button>Click me</Button>
 *             </div>
 *         </li>
 *     </List>
 */

import React from 'react'

export default function List (props) {
    let className = "list"
    if (props.size) className += ` list--${props.size}`
    if (props.divide && props.divide != 'false') className += ` list--divide`
    if (props.hover && props.hover != 'false') className += ` list--hover list--pointer`
    if (props.noGutter && props.noGutter != 'false') className += ` list--no-gutter`
    if (props.className) className += ` ${props.className}`
    return (
        <ul className={className} id={props.id}>
            {props.children}
        </ul>
    )
}
