import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div style={{width: 900, border: "5px solid lightgrey", borderRadius: 20, padding: 50, margin: "30px auto"}}>
                <ProgressBar type="line" percentage="80"/>
                <br/><br/>
                <ProgressBar type="line">Loading...</ProgressBar>
                <br/><br/>
                <ProgressBar
                    type="circle"
                    percentage="50"
                    strokeWidth="50"
                >Loading...</ProgressBar>
                <br/><br/>
                <ProgressBar
                    type="line"
                    strokeWidth="50"
                    percentage="50"
                >Loading...</ProgressBar>
                <br/><br/>
            </div>
        )
    }
}

export default class ProgressBar extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            perimeter: this.calculatePerimeter(),
        }
        this.circleRef = React.createRef()
    }

    calculateRelativeStrokeWidth () {
        let relativeStrokeWidth = 8 // Default 8
        console.log(this.circleRef)
        setTimeout(() => {
            console.log(this.circleRef)
        }, 5e3)
        if (this.props.strokeWidth) {
            relativeStrokeWidth = (this.props.strokeWidth / 222 * 100).toFixed(1)
            console.log('rela', relativeStrokeWidth, this.props.strokeWidth)

        }
        return relativeStrokeWidth
    }

    calculateTrackPath () {
        let relativeStrokeWidth = this.calculateRelativeStrokeWidth()
        const radius = parseInt(50 - parseFloat(relativeStrokeWidth) / 2, 10)
        return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`
    }

    calculatePerimeter () {
        const radius = 50 - parseFloat(this.calculateRelativeStrokeWidth()) / 2
        return 2 * Math.PI * radius
    }

    render () {
        let className = "progress-bar"
        if (this.props.type) className = `progress-bar__${this.props.type}`
        if (this.props.className) className += ` ${this.props.className}`
        return (
            <div className={className} id={this.props.id}>
                {this.props.type.trim().toLowerCase() == 'circle' ? (
                    <svg
                        viewBox="0 0 100 100"
                        ref={this.circleRef}
                    >
                        <path
                            className="progress-bar__circle-track"
                            d={this.calculateTrackPath()}
                            strokeWidth={this.calculateRelativeStrokeWidth()}
                            stroke="#F3F3F3"
                            fill="none"
                        ></path>
                        <path
                            stoke="#41e994"
                            className="progress-bar__circle-path"
                            d={this.calculateTrackPath()}
                            strokeLinecap="square"
                            stroke="stroke"
                            fill="none"
                            strokeWidth={this.calculateRelativeStrokeWidth()}
                            style={{
                                zIndex: 10000,
                                strokeDasharray: `${this.state.perimeter}px,${this.state.perimeter}px`,
                                strokeDashoffset: (1 - this.props.percentage / 100) * this.state.perimeter + 'px',
                                transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
                            }}
                        ></path>
                    </svg>
                ) : null}
                <div className="progress-bar__line-outer" style={{
                    height: this.props.strokeWidth ? this.props.strokeWidth + 'px' : '20px',
                }}>
                    <div className="progress-bar__line-inner" style={{
                        width: this.props.percentage + '%',
                    }}>
                        <div className="progress-bar__line-innerText">
                            <span className="progress-bar__custom-text">{this.props.children}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'))
