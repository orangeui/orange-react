/**
 * Usage:
 *     <Card [all-optional-properties]>
 *         <CardHeader></CardHeader>
 *         <CardBody></CardBody>
 *         <CardFooter></CardFooter>
 *     </Card>
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
    let className = "card__body"
    return (
        <div className={className}>{props.children}</div>
    )
}
