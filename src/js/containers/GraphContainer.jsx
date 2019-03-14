import { Route } from 'react-router-dom';
import RootContainer from './RootContainer';
import React, { Component } from 'react';

class GraphContainer extends Component {
    render() {
        const Container = (
            <div>
                <Route path={'DefaultRoute'} component={RootContainer} />
            </div>
        );

        return Container;
    }
}

export default GraphContainer;
