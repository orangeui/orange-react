/**
 * Usage:
 *     <Card [all-optional-properties]>
 *         <CardHeader></CardHeader>
 *         <CardBody></CardBody>
 *         <CardFooter></CardFooter>
 *     </Card>
 *
 * Attributes:
 *     clickable OR clickable="true" OR clickable="false"
 *
 * Example:
 *     <Card>
 *         <CardHeader>
 *             <h3>This is the header</h3>
 *         </CardHeader>
 *         <CardBody>
 *             This is the card body.
 *         </CardBody>
 *          <CardFooter>
 *             This is the card footer
 *         </CardFooter>
 *     </Card>
 */

import React from 'react'

export default function CardFooter (props) {
    let className = "card__footer"
    if (props.clickable && props.clickable != 'false') className += " card__footer--click"
    return (
        <div className={className}>{props.children}</div>
    )
}
