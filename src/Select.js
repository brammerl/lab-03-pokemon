import React, { Component } from 'react'

export default class Select extends Component {
    render() {
        return (
            <div id='selector'>
                <select onChange={this.props.selectFxn}>
                <option value='' defaultValue>All</option>
                        <option value='water'>Water</option>
                        <option value='fire'>Fire</option>
                        <option value='grass'>Grass</option>
                </select>
                <input onChange={this.props.inputFxn} placeholder='Enter Pokemone Name'/>
                <button onClick={this.props.clickFxn}>Search</button>
            </div>
        )
    }
}
