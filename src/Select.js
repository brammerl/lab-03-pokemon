import React, { Component } from 'react'

export default class Select extends Component {
    render() {
        return (
            <div id='selector' onChange={this.props.fxn}>
                <select>
                <option value='' defaultValue>All</option>
                        <option value='pokemon'>Name</option>
                        <option value='type'>Type</option>
                </select>
            </div>
        )
    }
}
