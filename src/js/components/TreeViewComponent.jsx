import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TreeViewComponent extends Component {
    render() {
        return (
            <section className={'card'}>
                <header className={'card-header'}>
                    <h2>{this.props.label}</h2>
                </header>
                <div className={'card-body'} />
            </section>
        );
    }
}

TreeViewComponent.propTypes = {
    label: PropTypes.string
};

export default TreeViewComponent;
