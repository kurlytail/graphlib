import React from 'react';
import Renderer from 'react-test-renderer';

import RootContainer from '../RootContainer';

describe('# RootContainer', () => {
    describe('## constructor', () => {
        it('### should create default object', () => {
            const container = Renderer.create(<RootContainer />);
            expect(container.toJSON()).toMatchSnapshot();
        });
    });
});
