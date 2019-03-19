import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';

class ButtonComponent extends Component {
    render() {
        return (
            <button type={'button'} className={'btn'}>
                {lodash.startCase(this.props.label)}
            </button>
        );
    }
}

ButtonComponent.propTypes = {
    label: PropTypes.string
};

export default ButtonComponent;
