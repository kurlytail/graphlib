import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import DesignComponentContainer from './DesignComponentContainer';

import PropertiesContainer from './PropertiesContainer';

import GraphContainer from './GraphContainer';
import { ButtonComponent } from '../components';
import React, { Component } from 'react';

class RootContainer extends Component {
    render() {
        const Container = (
            <div className={'container-fluid'}>
                <ButtonComponent label="createCell" />

                <ButtonComponent label="createTube" />

                <ButtonComponent label="reverse" />

                <ButtonComponent label="loadDesign" />

                <ButtonComponent label="saveDesign" />

                <DesignComponentContainer label="designComponents" />

                <PropertiesContainer label="properties" />

                <Route path={'*'} component={GraphContainer} />
            </div>
        );
        return <Router>{Container}</Router>;
    }
}

export default RootContainer;
