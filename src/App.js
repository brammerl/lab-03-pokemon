import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route, 
    Switch
} from "react-router-dom";

import SelectionPage from './SelectionPage.js';
import DetailPage from './DetailPage.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route
                            path='/'
                            exact
                            render={(routerProps) => <SelectionPage {...routerProps} />}
                        />
                        <Route
                            path='/pokemon/:pokemon'
                            render={(routerProps) => <DetailPage {...routerProps}/>}
                        />

                        
                    </Switch>
                </Router>
            </div>
        )
    }
}
