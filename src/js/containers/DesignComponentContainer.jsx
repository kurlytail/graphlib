import { TreeViewComponent, TitleComponent } from '../components';
import React, { Component } from 'react';

class DesignComponentContainer extends Component {
    render() {
        const Container = (
            <div className={'container-fluid'}>
                <TreeViewComponent label="designTree" />

                <TitleComponent label="title" />
            </div>
        );
        return Container;
    }
}

export default DesignComponentContainer;
