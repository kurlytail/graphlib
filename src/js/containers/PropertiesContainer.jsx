import { TreeViewComponent } from '../components';
import React, { Component } from 'react';

class PropertiesContainer extends Component {
    render() {
        const Container = (
            <div className={'container-fluid'}>
                <TreeViewComponent label="properties" />
            </div>
        );
        return Container;
    }
}

export default PropertiesContainer;
