import React from 'react';
import Renderer from 'react-test-renderer';

import PropertiesContainer from '../PropertiesContainer';

describe('# PropertiesContainer', () => {
    describe('## constructor', () => {
        it('### should create default object', () => {
            const container = Renderer.create(<PropertiesContainer />);
            expect(container.toJSON()).toMatchSnapshot();
        });
    });
});
