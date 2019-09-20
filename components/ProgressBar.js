/**
 * Usage:
 *     <ProgressBar percentage="10" />
 *
 * Attributes:
 *     percentage="0" (Between 0 and 100)
 *     color="green" OR color="red" OR color="sapphire" OR color="default"
 *     strokeWidth="10"
 *     id="your-id"
 *     className="your-custom-class"
 *
 * Examples:
 *     <ProgressBar percentage="80" />
 *     <ProgressBar color="sapphire" percentage="10">Loading...</ProgressBar>
 */

import React from 'react'

export default class ProgressBar extends React.Component {
    constructor (props) {
        super(props)
    }

    convertColor (color) {
        switch (color) {
            case 'green':
                color = '#14B72F'
                break
            case 'red':
                color = '#FF727B'
                break
            case 'sapphire':
                color = '#474BA5'
                break
            default:
                color = '#A8A8A8'
        }
        return color
    }

    render () {
        let classNameInner = `progress-bar__line`
        let className = `progress-bar progress-bar--line`
        let color = '#A8A8A8'
        if (this.props.color) color = this.convertColor(this.props.color)
        if (this.props.className) className += ` ${this.props.className}`
        return (
            <div
                className={className}
                id={this.props.id}
                style={{color,}}
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <div className={classNameInner}>
                    <div className="progress-bar__line-outer" style={{
                        height: this.props.strokeWidth ? this.props.strokeWidth + 'px' : '20px',
                    }}>
                        <div className="progress-bar__line-inner" style={{
                            width: this.props.percentage + '%',
                            backgroundColor: color,
                        }}>
                            <div className="progress-bar__line-innerText">
                                <span className="progress-bar__custom-text">{this.props.children}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
