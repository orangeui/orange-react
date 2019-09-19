/**
 * Usage:
 *     <BreadcrumbsItem [all-optional-properties]>
 *
 * Attributes:
 *     to="/your-location" (REQUIRED, to specify where you'll go when clicked)
 *     content="Example"   (REQUIRED, the content inside the breadcrumb)
 *     active OR active="true" (Omit active if you don't want it to be active)
 *     iconClass="icon-integrations" (The <span class={iconClass}></span> shown if any)
 *
 * Requirements:
 *     - You need to use the BreadcrumbsItem as a direct child of <Breadcrumb></Breadcrumb>
 *      Import it separately.
 *     - You have to use React Router and have react-router-dom installed for this to work.
 *
 * Examples:
 *     <Breadcrumbs>
 *         <BreadcrumbsItem content="Example" to="/example" active />
 *         <BreadcrumbsItem content="Another" to="/another" />
 *     </Breadcrumbs>
 *
 *     <Breadcrumbs
 *         fullWidth
 *         backTo="/"
 *         color="blue"
 *     >
 *         <BreadcrumbsItem content="Example" to="/example" iconClass="icon-integrations" />
 *         <BreadcrumbsItem content="Another" to="/another" />
 *     </Breadcrumbs>
 */

import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function BreadcrumbsItem (props) {
    let className = ""
    let icon = null
    if (props.iconClass) icon = <span className={props.iconClass}></span>
    if (props.active && props.active != 'false') className += "is-active"
    return (
        <li {...props}>
            <Link to={props.to} className={className}>
                {icon}
                {props.back ? 'Back' : props.content}
            </Link>
        </li>
    )
}

BreadcrumbsItem.propTypes = {
    content: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}
