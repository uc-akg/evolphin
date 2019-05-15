import React from 'react';
import logo from './../assets/dashboard.jpg';

const CLASS = 'sv-Dashboard-image';
export default class Dashboard extends React.Component {
    render() {
        return(
            <div className={CLASS}>
                <img src={logo} className="App-logo" alt="logo" />
                <div className={CLASS+'-text'}>
                    <h3>Modern Globetrotters - Brand Platform</h3>
                    <div>Stay awesome</div>
                </div>
            </div>
        );
    }
}