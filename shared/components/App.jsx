import React from 'react';
import { Link } from 'react-router';

export default class AppView extends React.Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                {this.props.children}
            </div>
        );
    }
}
