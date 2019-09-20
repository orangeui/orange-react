/**
 * Usage:
 *     <BrowserRouter>
 *         <Switch>
 *             <Route path="/" exact render={() => (
 *                 <Navigation>
 *                     <NavigationItem active>Home</NavigationItem>
 *                 </Navigation>
 *             )} />
 *         </Switch>
 *     </BrowserRouter>
 *
 * Attributes:
 *     to="/location" (Your react-router location)
 *     active OR active="true" OR active="false"
 *     disabled OR disabled="true" OR disabled="false"
 *     icon="your-icon"
 *     id="your-id"
 *     className="your-custom-class"
 *
 * Example:
 *     <Navigation align="right" color="blue">
 *         <NavigationItem active>Home</NavigationItem>
 *     </Navigation>
 */

import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationItem (props) {
    let className = ""
    let hasIcon = false
    if (props.active && props.active != 'false') className += ` is-active`
    if (props.disabled && props.disabled != 'false') className += ` is-disabled`
    if (props.icon) hasIcon = true
    if (props.className) className += ` ${props.className}`
    return (
        <li>
            <Link to={props.to} id={props.id} className={className}>
                <span className={props.icon}></span>
                {props.children}
            </Link>
        </li>
    )
}
