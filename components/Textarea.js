/**
 * Usage:
 *     <Textarea
 *         label="Write something"
 *         description="You can write something there"
 *     />
 *
 * Attributes:
 *     autoExpand OR autoExpand="true" OR autoExpand="false"
 *     label="your-label"
 *     description="your-description"
 *     value="initial-text"
 *     rows="initial-rows"
 *     cols="initial-cols"
 *     readOnly OR readOnly="true" OR readOnly="false"
 *     id="your-id"
 *     className="your-custom-class"
 *
 * Examples:
 *     <Textarea
 *         label="Write something"
 *         description="You can write something there"
 *     />
 *     <Textarea
 *         autoExpand
 *         name="textarea"
 *         rows="3"
 *         label="Auto expand"
 *         description="You can write something there"
 *     />
 */

import React from 'react'

export default class Textarea extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            value: this.props.value || '',
            rows: this.props.rows || 3,
            hasFocus: false,
        }
    }

    handleChange(e) {
        const lineHeight = 22
        const oldRows = e.target.rows
        e.target.rows = 1
        const newRows = ~~(e.target.scrollHeight / lineHeight)
        if (newRows === oldRows) e.target.rows = newRows
        this.setState({
            value: e.target.value,
            rows: newRows,
        })
    }

    render () {
        let textArea = null
        let className = "form__textarea"
        const isReadOnly = this.props.readOnly && this.props.readOnly != 'false'
        const isDisabled = this.props.disabled && this.props.disabled != 'false'
        if (this.state.hasFocus || isReadOnly) className += ` has-focus`
        if (this.props.className) className += ` ${this.props.className}`

        return (
            <form className={this.props.size == 'large' ? 'form form--large' : 'form'}>
                <div className="form__item">
                    <textarea
                        name={this.props.name}
                        className={className}
                        id={this.props.id || 'textarea'}
                        value={this.state.value}
                        disabled={isDisabled}
                        cols={this.props.cols}
                        rows={this.state.rows}
                        readOnly={isReadOnly}
                        onChange={e => {
                            if (this.props.autoExpand) this.handleChange(e)
                            else this.setState({value: e.target.value})
                        }}
                        onFocus={e => this.setState({hasFocus: true})}
                        onBlur={e => {
                            if (e.target.value == '') this.setState({hasFocus: false})
                        }}
                    ></textarea>
                    <label htmlFor={this.props.id || 'textarea'} className="form__label">{this.props.label}</label>
                    <div className="form__description">{this.props.description}</div>
                </div>
            </form>
        )
    }
}
