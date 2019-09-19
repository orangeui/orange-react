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
 *          <CardFooter clickable onClick={e => console.log('The footer has been clicked')}>
 *             This is the card footer
 *         </CardFooter>
 *     </Card>
 */

import React from 'react'

export default function CardFooter (props) {
    let className = props.className ? `card__footer ${props.className}` : "card__footer"
    if (props.clickable && props.clickable != 'false') className += " card__footer--click"
    return (
        <div className={className} id={props.id} onClick={e => {
            if (props.onClick) props.onClick(e)
        }}>{props.children}</div>
    )
}
