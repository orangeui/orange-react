/**
 * Usage:
 *     <Dropdown [all-optional-attributes]>
 *         <li onClick={// Do something when you click this}>Example 1</li>
 *         <li>Example 2</li>
 *         <li>Example 3</li>
 *         <li>Example 4</li>
 *         <li onClick={// Do something when you click this}>Example 5</li>
 *     </Dropdown>
 *
 * Attributes:
 *     large OR large="true" OR large="false"
 *     id="a-unique-id"
 *     label="label-text"
 *     placeholder="text"
 *     description="text"
 *     disabled OR disabled="true" OR disabled="false"
 *     id="your-id"
 *     className="your-custom-class"
 *
 * Examples:
 *     <Avatar circle color="red" size="large" />
 *     <Avatar size="small" />
 */

import React from 'react'

export default class Dropdown extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isOpen: false,
            selected: null,
        }
        this.selectedStyle = {
            color: '#4648d2',
            opacity: 1,
            visibility: 'visible',
        }
        this.selectedLabelStyle = {
            color: '#000',
            height: '100%',
            fontSize: this.props.large && this.props.large != 'false' ? '12px' : '10px',
            padding: this.props.large && this.props.large != 'false' ? '12px 12px 0' : '6px 12px 0',
        }
    }

    render () {
        let className = this.props.className ? `form-dropdown ${this.props.className}` : "form-dropdown"
        if (this.props.disabled && this.props.disabled != 'false') className += " id-disabled"
        if (this.state.isOpen) className += " is-open"
        return (
            <form className={this.props.large && this.props.large != 'false' ? "form form--large" : "form"}>
                <div className="form__item" onClick={() => {
                    this.setState({isOpen: !this.state.isOpen})
                }}>
                    <div
                        id={this.props.id}
                        className={className}
                    >
                        <label htmlFor={this.props.id} style={this.state.selected ? this.selectedLabelStyle : {}} className="form-dropdown__label">{this.props.label}</label>
                        <input
                            id={this.props.id}
                            type="text"
                            name={this.props.name}
                            className="form-dropdown__input"
                        />
                        <div className="form-dropdown__text" style={this.state.selected ? this.selectedStyle : {}}>{this.state.selected || this.props.placeholder}</div>
                        <div className="form-dropdown__icon">
                            <svg viewBox="0 0 24 24">
                                <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                            <svg viewBox="0 0 24 24">
                                <path fill="#000000" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </div>
                        <div className="form-dropdown__content">
                            <ul className="form-dropdown__menu" onClick={e => {
                                this.setState({
                                    selected: e.target.innerText,
                                })
                            }}>
                                {this.props.children}
                            </ul>
                        </div>
                    </div>
                    <div className="form__description">{this.props.description}</div>
                </div>
            </form>
        )
    }
}
