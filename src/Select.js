import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';

export default class Selector extends Component {
    render() {
        return (
        <div>
            <div>
            <FormControl className='formControl'>
            <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              onChange={this.props.selectFxn}
            >
              <MenuItem value="">
                <em>Pokemon Type</em>
              </MenuItem>
              <MenuItem value='water'>Water</MenuItem>
              <MenuItem value='fire'>Fire</MenuItem>
              <MenuItem value='grass'>Grass</MenuItem>
            </Select>
            </FormControl>
            </div>
                {/* <input onChange={this.props.inputFxn} placeholder='Enter Pokemone Name'/>
                <button onClick={this.props.clickFxn}>Search</button> */}
            </div>
        )
    }
}
