import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import GraphContainer from './GraphContainer';
import { ButtonComponent } from '../components';
import React, { Component } from 'react';

class RootContainer extends Component {
    render() {
        const Container = (
            <div className={'container-fluid'}>
                <ButtonComponent label="rebuild" />

                <Route path={'*'} component={GraphContainer} />
            </div>
        );
        return <Router>{Container}</Router>;
    }
}

export default RootContainer;
