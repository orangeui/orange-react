/**
 * Usage:
 *     <Input [all-optional-attributes] />
 *
 * Attributes:
 *     readOnly OR readOnly="true" OR readOnly="false"
 *     name="your-input-name"
 *     id="your-id"
 *     className="your-custom-class"
 *     type="your-type" (The default is type="text")
 *     onChange={() => {}} (Doesn't do anything by default unless you add it)
 *     label="your-label"
 *     description="the description"
 *     left={} (Can be a text, a button or whatever you need)
 *     right={} (Can be a text, a button or whatever you need)
 *
 * Note: Change the containing form className to "form form--large" if you need a
 *       large input.
 *
 * Examples:
 *     <form className="form">
 *         <Input
 *             id="a"
 *             label="This is the input label text"
 *             description="My custom input description"
 *             name="example-name"
 *             onChange={e => {console.log(e.target.value)}}
 *         />
 *     </form>
 */

import React from 'react'

export default class Input extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            hasValue: false,
            hasFocus: false,
        }
    }

    render () {
        let inputClass = this.props.className ? `form__input ${this.props.className}` : "form__input"
        let readOnly = false
        let hasSides = false
        if (this.props.left || this.props.right) hasSides = true
        if (this.props.readOnly && this.props.readOnly != 'false') readOnly = true
        if (readOnly) inputClass += ' has-value'
        if (this.state.hasFocus) inputClass += ' has-focus'
        if (this.state.hasValue) inputClass += ' has-value'
        return (
            <div className={hasSides ? "form__item has-action" : "form__item"}>
                {this.props.left ? <div className="form__action">{this.props.left}</div> : null}

                <div className="form__input-wrapper">
                    <input
                        {...this.props}
                        name={this.props.name}
                        readOnly={readOnly}
                        id={this.props.id}
                        type={this.props.type || 'text'}
                        className={inputClass}
                        onChange={e => {
                            if (e.target.value != '') this.setState({hasValue: true})
                            else this.setState({hasValue: false})
                            if (this.props.onChange) this.props.onChange(e)
                        }}
                        onFocus={e => {
                            this.setState({hasFocus: true})
                        }}
                        onBlur={e => {
                            this.setState({hasFocus: false})
                        }}
                    />
                    <label htmlFor={this.props.id} className="form__label">{this.props.label}</label>
                </div>

                {this.props.right ? <div className="form__action">{this.props.right}</div> : null}

                <p className="form__description">{this.props.description}</p>
            </div>
        )
    }
}
