/**
 * Usage:
 *     <Message [all-optional-attributes]>Message content</Message>
 *
 * Attributes:
 *     full OR full="true" OR full="false"
 *     color="your-color-name"
 *     avatar={<Avatar/>} (Your custom avatar component)
 *     button={<Button size="small">Click me</Button>} (Your custom button action)
 *     id="your-id"
 *     className="your-custom-class"
 *
 * Examples:
 *     <Message>A basic message</Message>
 *     <Message full color="blue">A full sized message</Message>
 *     <Message
 *         color="green"
 *         button={
 *             <Button size="small">Click me</Button>
 *         }
 *     >
 *         <h6>Message title</h6>
 *         <p>Message content</p>
 *     </Message>
 */

import React from 'react'

export default function Message (props) {
    let className = "message"
    if (props.color) className += ` message--color-${props.color}`
    if (props.full && props.full != 'false') className += ` message--full`
    return (
        <div className={className} id={props.id}>
            {props.avatar ? props.avatar : null}
            <div className="message__body">
                {props.children}
            </div>
            {props.button ? (
                <div className="message__action">
                    {props.button}
                </div>
            ) : null }
        </div>
    )
}
