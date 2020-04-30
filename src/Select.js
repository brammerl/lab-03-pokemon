import React, { Component } from 'react'

export default class Select extends Component {
    render() {
        return (
            <div id='selector' onChange={this.props.fxn}>
                <select>
                <option value='' defaultValue>All</option>
                        <option value='water'>Water</option>
                        <option value='fire'>Fire</option>
                        <option value='earth'>Earth</option>
                </select>
            </div>
        )
    }
}
