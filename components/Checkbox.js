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
 *     id="your-id"
 *     className="your-custom-class"
 *     onChange={} (To detect when its clicked, same as onClick)
 *     onClick={} (Can be omitted)
 *
 * Examples:
 *     <Checkbox id="example">Example checkbox</Checkbox>
 *     <Checkbox
 *         id="example2"
 *         onChange={(e, clicked) => console.log(clicked)}
 *     >Example checkbox</Checkbox>
 *     <Checkbox id="example3" checked>Checked checkbox</Checkbox>
 *     <Checkbox id="exampleX" disabled>Disabled checkbox</Checkbox>
 */

import React from 'react'

export default class Checkbox extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            checked: this.props.checked && this.props.checked != 'false',
            checkedAfter: false,
            checkedSetInitially: this.props.checked && this.props.checked != 'false',
        }
    }

    render () {
        let disabled = false
        if (this.props.disabled && this.props.disabled != 'false') disabled = true
        return (
            <div className="checkbox">
                <input
                    type="checkbox"
                    className={this.props.className} disabled={disabled}
                    id={this.props.id}
                    onChange={e => {
                        if (this.state.checkedSetInitially) {
                            let afterClick = !this.state.checked
                            this.setState({checked: afterClick})
                            if (this.props.onChange) this.props.onChange(e, afterClick)
                        } else {
                            let afterClick = !this.state.checkedAfter
                            this.setState({checkedAfter: afterClick})
                            if (this.props.onChange) this.props.onChange(e, afterClick)
                        }
                    }}
                    checked={this.state.checked}
                    onClick={e => {
                        if (this.props.onClick) this.props.onClick(e, !this.state.checked)
                    }}
                />
                <label htmlFor={this.props.id}>{this.props.children}</label>
            </div>
        )
    }
}
