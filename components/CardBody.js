/**
 * Usage:
 *     <Card [all-optional-properties]>
 *         <CardHeader></CardHeader>
 *         <CardBody></CardBody>
 *         <CardFooter></CardFooter>
 *     </Card>
 *
 * Attributes:
 *     id="your-id"
 *     className="your-custom-class"
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

export default function CardBody (props) {
    let className = props.className ? `card__body ${props.className}` : "card__body"
    return (
        <div className={className} id={props.id}>{props.children}</div>
    )
}
