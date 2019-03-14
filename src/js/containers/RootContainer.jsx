import { BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';

class RootContainer extends Component {
    render() {
        const Container = <div />;

        return <Router>{Container}</Router>;
    }
}

export default RootContainer;
