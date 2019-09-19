/**
 * Usage:
 *     <EmptyState [all-optional-attributes]>
 *        <Button>Continue</Button>
 *     </EmptyState>
 *
 * Attributes:
 *     noGutter OR noGutter="true"
 *     title="title"
 *     description="description"
 *     img="/images/empty-state.svg"
 *     id="your-id"
 *     className="your-custom-class"
 *
 * Examples:
 *     <EmptyState
 *         no-gutter
 *         title="Title"
 *         description="Description"
 *         img="https://orangecss.com/images/empty-state.svg"
 *     >
 *         <Button>Custom Button</Button>
 *     </EmptyState>
 */

import React from 'react'

export default function EmptyState (props) {
    let className = props.className ? `empty-state ${props.className}` : 'empty-state'
    if (props.noGutter && props.noGutter != 'false') className += " empty-state--no-gutter"
    return (
        <div className={className} id={props.id}>
            <div className="empty-state__content">
                <div className="empty-state__title">
                    <h2>{props.title}</h2>
                </div>
                <div className="empty-state__description">
                    <p>{props.description}</p>
                </div>
                <div className="empty-state__buttons">
                    {props.children}
                </div>
            </div>
            <div className="empty-state__image"><img src={props.image} /></div>
        </div>
    )
}
