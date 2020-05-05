import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
export default class NameSearch extends Component {
    render() {
        return (
            <div>
                <TextField id="nameSearch" label="Pokemon Name" variant="outlined" onChange={this.props.fxn}/><br/>
            </div>
        )
    }
}
