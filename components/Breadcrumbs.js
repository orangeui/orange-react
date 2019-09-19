/**
 * Usage:
 *     <Breadcrumbs [all-optional-attributes]> One or more <BreadcrumbItem> </Breadcrumbs>
 *
 * Attributes:
 *     fullWidth OR fullWidth="true" (Omit fullWidth if you don't need it)
 *     backTo="/your-location" (Shows the Back button with the specified location)
 *     color="your-color-name"
 *
 * Requirements:
 *     - You need to have at least one <BreadcrumbItem /> inside. Import it separately.
 *     - You have to use React Router and have react-router-dom installed for this to work.
 *
 * Examples:
 *     <Breadcrumbs>
 *         <BreadcrumbItem content="Example" to="/example" />
 *         <BreadcrumbItem content="Another" to="/another" />
 *     </Breadcrumbs>
 *
 *     <Breadcrumbs
 *         fullWidth
 *         backTo="/"
 *         color="blue"
 *     >
 *         <BreadcrumbItem content="Example" to="/example" />
 *         <BreadcrumbItem content="Another" to="/another" />
 *     </Breadcrumbs>
 *
 *     <Breadcrumbs
 *         color="green"
 *     >
 *         <BreadcrumbItem content="Example" to="/example" />
 *         <BreadcrumbItem content="Another" to="/another" />
 *     </Breadcrumbs>
 */

import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumbs (props) {
    let className = "breadcrumbs"
    let backButton = null
    if (props.backTo) {
        backButton = (
            <Link to={props.backTo} className="breadcrumbs__button">
                Back
            </Link>
        )
    }
    if (props.fullWidth && props.fullWidth != 'false') className += " breadcrumbs--full"
    if (props.color) className += ` breadcrumbs--color-${props.color}`
    return (
        <nav className={className} {...props}>
            {backButton}

            <ul>
                {props.children}
            </ul>
        </nav>
    )
}
