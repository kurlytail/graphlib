import { ButtonComponent } from '../components';
import React, { Component } from 'react';

class GraphContainer extends Component {
    render() {
        const Container = (
            <div className={'container-fluid'}>
                <ButtonComponent label="rebuild" />
            </div>
        );
        return Container;
    }
}

export default GraphContainer;
