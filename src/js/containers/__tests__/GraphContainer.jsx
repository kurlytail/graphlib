import React from 'react';
import Renderer from 'react-test-renderer';

import GraphContainer from '../GraphContainer';

describe('# GraphContainer', () => {
    describe('## constructor', () => {
        it('### should create default object', () => {
            const container = Renderer.create(<GraphContainer />);
            expect(container.toJSON()).toMatchSnapshot();
        });
    });
});
