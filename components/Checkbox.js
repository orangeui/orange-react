/**
 * Usage:
 *     <Checkbox [all-optional-properties]>
 *         Checkbox label text
 *     </Checkbox>
 *
 * Attributes:
 *     id="your-id" (To detect changes)
 *     disabled OR disabled="false" OR disabled="true"
 *     checked OR checked="false" OR checked="true"
 *
 * Examples:
 *     <Checkbox id="example">Example checkbox</Checkbox>
 *     <Checkbox
 *         id="example2"
 *         onChange={e => console.log(e.target.value)}
 *     >Example checkbox</Checkbox>
 *     <Checkbox id="example3" checked>Checked checkbox</Checkbox>
 *     <Checkbox id="exampleX" disabled>Disabled checkbox</Checkbox>
 */

import React from 'react'

export default class Checkbox extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            checked: this.props.checked,
            checkedSetInitially: this.props.checked && this.props.checked != 'false',
        }
    }

    render () {
        let disabled = false
        if (this.props.disabled && this.props.disabled != 'false') disabled = true
        return (
            <div className="checkbox" {...props}>
                <input type="checkbox" disabled={disabled} id={this.props.id} onChange={e => {
                    if (this.state.checkedSetInitially) {
                        this.setState({checked: !this.state.checked})
                    }
                    if (this.props.onChange) this.props.onChange(e)
                }} checked={this.state.checked}/>
                <label htmlFor={this.props.id}>{this.props.children}</label>
            </div>
        )
    }
}
