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
 *     color="your-color-name"
 *     align="center" OR align="right"
 *     id="your-id"
 *     className="your-custom-class"
 *
 * Example:
 *     <Navigation align="right" color="blue">
 *         <NavigationItem active>Home</NavigationItem>
 *     </Navigation>
 */

import React from 'react'

export default function Navigation (props) {
    let className = "nav"
    if (props.align) className += ` nav--${props.align}`
    if (props.color) className += ` nav--color-${props.color}`
    if (props.className) className += ` ${props.className}`
    return (
        <nav className={className} id={props.id}>
            <ul>
                {props.children}
            </ul>
        </nav>
    )
}
