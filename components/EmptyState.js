/**
 * Usage:
 *     <EmptyState [all-optional-attributes]>
 *        <Button>Continue</Button>
 *     </EmptyState>
 *
 * Attributes:
 *     no-gutter OR no-gutter="true"
 *     title="title"
 *     description="description"
 *     img="/images/empty-state.svg"
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
    return (
        <div className={props['no-gutter'] && props['no-gutter'] != 'false' ? "empty-state empty-state--no-gutter" : "empty-state"} {...props}>
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
