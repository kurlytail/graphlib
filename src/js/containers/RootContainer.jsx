// @flow

import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { Route } from 'react-router-dom';

class RootContainer extends Component {
    render() {
        const Container = <div />;

        return <Router>{Container}</Router>;
    }
}

export default RootContainer;
