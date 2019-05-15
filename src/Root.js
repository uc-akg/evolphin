import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './App';
import CommonPage from './CommonPage';
export default class Root extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Route exact path="/" component={App}/>
                <Route exact path="/assets" component={CommonPage}/>
                <Route exact path="/collections" component={CommonPage}/>
                <Route exact path="/campaigns" component={CommonPage}/>
                <Route exact path="/analytics" component={CommonPage}/>
                <Route exact path="/tasks" component={CommonPage}/>
            </BrowserRouter>
        );
    }
}